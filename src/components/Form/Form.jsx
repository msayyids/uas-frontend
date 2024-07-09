import { useContext, useState } from 'react';
import {
  FormContainer,
  InnerContainer,
  ContentContainer,
  ImageContainer,
  StyledImage,
  FormSection,
  FormGroup,
  Label,
  Select,
  Input,
  ErrorMessage,
  SubmitButton,
} from './Form.styled';
import { CovidContext } from '../../Context/context';
import Title from '../Title/Title';
import FooterImage from '../../asset/Image.png'

const Forms = () => {
  const { provinsiLocalData, setProvinsiLocalData } = useContext(CovidContext);
  const [patient, setPatient] = useState({
    isProvinceError: false,
    isStatusError: false,
    isJumlahError: false,
    kota: '',
    status: '',
    jumlah: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPatient({ ...patient, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (patient.kota === '') {
      setPatient({ ...patient, isProvinceError: true });
      return;
    }

    if (patient.status === '') {
      setPatient({ ...patient, isProvinceError: false, isStatusError: true });
      return;
    }

    if (patient.jumlah === 0) {
      setPatient({ ...patient, isProvinceError: false, isStatusError: false, isJumlahError: true });
      return;
    }

    const updatedPatients = provinsiLocalData.map((p) =>
      p.kota === patient.kota ? { ...p, [patient.status]: p[patient.status] + Number(patient.jumlah) } : p
    );

    setProvinsiLocalData(updatedPatients);

    setPatient({
      isProvinceError: false,
      isStatusError: false,
      isJumlahError: false,
      kota: '',
      status: '',
      jumlah: 0,
    });
  };

  const kotaOption = provinsiLocalData.map((d) => (
    <option key={d.kota} value={d.kota}>
      {d.kota}
    </option>
  ));

  return (
    <FormContainer>
      <InnerContainer>
        <ContentContainer>
          <ImageContainer>
            <StyledImage
              src={FooterImage}
              alt=""
            />
          </ImageContainer>
          <FormSection>
            <Title text={"Provinsi"}/>
            <form onSubmit={handleClick}>
              <FormGroup>
                <div>
                  <Label>Kota</Label>
                  <Select
                    id="countries"
                    name="kota"
                    value={patient.kota}
                    onChange={handleChange}
                  >
                    <option value="">Pilih provinsi</option>
                    {kotaOption}
                  </Select>
                  {patient.isProvinceError && <ErrorMessage>Wajib diisi</ErrorMessage>}
                </div>
                <div>
                  <Label>Kasus</Label>
                  <Select
                    id="countries"
                    name="status"
                    value={patient.status}
                    onChange={handleChange}
                  >
                    <option value="">Pilih status</option>
                    <option value="kasus">Positif</option>
                    <option value="sembuh">Sembuh</option>
                    <option value="meninggal">Meninggal</option>
                    <option value="dirawat">Dirawat</option>
                  </Select>
                  {patient.isStatusError && <ErrorMessage>Wajib diisi</ErrorMessage>}
                </div>
                <div>
                  <Label>Jumlah</Label>
                  <Input
                    type="number"
                    name="jumlah"
                    value={patient.jumlah}
                    onChange={handleChange}
                  />
                  {patient.isJumlahError && <ErrorMessage>Wajib diisi</ErrorMessage>}
                </div>
              </FormGroup>
              <SubmitButton type="submit" value="submit" />
            </form>
          </FormSection>
        </ContentContainer>
      </InnerContainer>
    </FormContainer>
  );
};

export default Forms;
