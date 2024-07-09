import { Container, InnerContainer, Header, TableContainer, Table, TableHeader, TableBody, TableRow, TableCell } from './table.styled';
import Title from "../Title/Title";
import Subtitle from "../SubTitle/Subtitle";

const Tabless = ({ data, title, subtitle }) => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Title text={title}/>
          <Subtitle text={subtitle}/>
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
              {data.map((d, index) => (
                <TableRow key={d.name || d.kota}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{d.name || d.kota}</TableCell>
                  <TableCell>{d.kasus !== undefined ? d.kasus : d.numbers?.confirmed}</TableCell>
                  <TableCell>{d.sembuh !== undefined ? d.sembuh : d.numbers?.recovered}</TableCell>
                  <TableCell>{d.dirawat !== undefined ? d.dirawat : d.numbers?.treatment}</TableCell>
                  <TableCell>{d.meninggal !== undefined ? d.meninggal : d.numbers?.death}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InnerContainer>
    </Container>
  );
};

export default Tabless;
