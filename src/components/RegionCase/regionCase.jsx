/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Section, Header, CardContainer } from "./region.styled";
import { CovidContext } from "../../Context/context";
import RegionCard from "../RegionCard/regionCard";
import Title from "../Title/Title";
import Subtitle from "../SubTitle/Subtitle";

const RegionCase = () => {
  const { regionalData } = useContext(CovidContext);

  return (
    <Section>
      <Header>
        <Title text={"Situation by region"}/>
        <Subtitle text={"Bacaan Pilihan Covid"}/>
      </Header>
      <CardContainer>
        {regionalData.map((region) => (
          <RegionCard
            key={region.name}
            name={region.name}
            numbers={region.numbers}
          />
        ))}
      </CardContainer>
    </Section>
  );
};

export default RegionCase;
