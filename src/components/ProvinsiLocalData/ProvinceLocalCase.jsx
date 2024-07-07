
import { useContext } from "react";
import {
  Container,
  InnerContainer,
  Header,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
} from './ProvinceLocalCase.styled';
import { CovidContext } from "../../Context/context";
import Title from "../Title/Title";
import Subtitle from "../SubTitle/Subtitle";
import Tabless from "../Table/table";

const ProvinceLocalCase = () => {

  const { provinsiLocalData } = useContext(CovidContext);

  const columns = ["kota", "kasus", "sembuh", "meninggal", "dirawat"];

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Title text={"Provinsi"}/>
          <Subtitle text={"Data covid berdasarkan provinsi"}/>
        </Header>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>No</TableHeader>
                <TableHeader>Provinsi</TableHeader>
                <TableHeader>Positif</TableHeader>
                <TableHeader>Sembuh</TableHeader>
                <TableHeader>Dirawat</TableHeader>
                <TableHeader>Meninggal</TableHeader>
              </tr>
            </thead>
            <TableBody>
              {provinsiLocalData.map((d, index) => (
                <Tabless key={d.kota} datas={d} index={index} coloumn={columns}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InnerContainer>
    </Container>
  );
};

export default ProvinceLocalCase;
