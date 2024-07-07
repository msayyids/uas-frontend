import { useContext } from "react";
import Card from "../Card/Card";
import {
  Section,
  Container,
  Header,
  CardContainer,
} from "./allcase.styled";
import { CovidContext } from "../../Context/context";
import Title from "../Title/Title";
import Subtitless from "../SubTitle/Subtitle";

const AllCase = () => {
  const { globalData } = useContext(CovidContext);

  const resultAllcase = globalData.map((globals) => (
    <Card key={globals.status} datas={globals} />
  ));

  return (
    <Section>
      <Container>
        <Header>
          <Title text={"Global Situation"}/>
          <Subtitless text={"Data Covid berdasarkan global"}/>
        </Header>
        <CardContainer>{resultAllcase}</CardContainer>
      </Container>
    </Section>
  );
};

export default AllCase;
