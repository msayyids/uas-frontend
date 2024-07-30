import styled from "styled-components";
import Title from "../Title/Title";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  text-align: center;
  padding-left: 12rem;
  padding-right: 12rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Paragraph = styled.p`
  padding: 1rem;
  color: #6b7280;
  font-size: 40px;
  font-family: sans-serif;
`;

const AboutUsSection = () => {

  const text = "big thanks to ka aufa billah"
  return (
    <Wrapper>
      <Title text={text} />
      <Paragraph>
        Semoga semakin sukses karirnya, menjadi programmer yang membawa banyak manfaat,
        dan ilmu yang diberikan menjadi lebih berkah. Semoga setiap kode
        yang ditulis menjadi solusi bagi banyak orang. Sukses selalu buat semuanya.
      </Paragraph>
    </Wrapper>
  );
};

export default AboutUsSection;
