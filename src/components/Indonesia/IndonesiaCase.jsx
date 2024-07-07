
import { useContext } from 'react';
import Card from '../Card/Card';
import {
  Section,
  Container,
  Header,
  CardContainer,
} from './IndonesiaCase.styled';
import { CovidContext } from '../../Context/context';
import Title from '../Title/Title';
import Subtitless from '../SubTitle/Subtitle';

const IndonesiaCase = () => {

  const {indonesiaData} = useContext(CovidContext)

  const resultIndonesiaCase = indonesiaData.map((patient) => (
    <Card key={patient.status} datas={patient} />
  ));

  return (
    <Section>
      <Container>
        <Header>
          <Title text={"Indonesia Situation"}/>
          <Subtitless text={"Data Covid Berdasarkan Indonesia"}/>
        </Header>
        <CardContainer>{resultIndonesiaCase}</CardContainer>
      </Container>
    </Section>
  );
};

export default IndonesiaCase;
