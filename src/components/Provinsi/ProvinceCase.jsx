
import { useContext } from "react";
import {
  Container,
  InnerContainer,
  Header,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
} from './ProvinceCase.styled';
import { CovidContext } from "../../Context/context";
import Title from "../Title/Title";
import Subtitless from "../SubTitle/Subtitle";
import Tabless from "../Table/table";

const ProvinceCase = () => {

  const { provinsiData } = useContext(CovidContext);


  return (
    <Container>
      <InnerContainer>
        <Header>
          <Title text={"Situation by Provinces"}/>
          <Subtitless text={"Data Indonesia Berdasarkan Procinsi"}/>
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
              {provinsiData.map((d, index) => (
                <Tabless key={d.name} datas={d} index={index}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InnerContainer>
    </Container>
  );
};

export default ProvinceCase;
