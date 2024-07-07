import styled from "styled-components";
import Title from "../Title/Title";
import Subtitless from "../SubTitle/Subtitle";

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
  font-size: 1rem;
  font-family: sans-serif;
`;

const AboutUsSection = () => {
  return (
    <Wrapper>
      <Title text={"Covid Id"} />
      <Subtitless text={"Memantau Kasus COVID-19 Secara Real-Time"} />
      <Paragraph>
        Kami berkomitmen untuk menyediakan informasi terkini tentang
        kasus COVID-19 di seluruh dunia. Sebagai penyedia platform monitoring,
        kami mengintegrasikan data terbaru dari sumber terpercaya untuk
        memastikan Anda mendapatkan akses yang akurat dan cepat terhadap
        informasi terkait penyebaran virus ini.
      </Paragraph>
      <Paragraph>
        Kami memahami pentingnya transparansi dan
        keandalan dalam menyediakan informasi kesehatan publik, dan kami
        berkomitmen untuk menjaga standar tertinggi dalam menyajikan data
        terkait COVID-19 kepada pengguna kami.
      </Paragraph>
      <Paragraph>
        kami memastikan bahwa platform
        kami tidak hanya memberikan informasi yang mudah diakses, tetapi juga
        alat analisis yang membantu dalam pemahaman lebih dalam tentang tren
        penyebaran virus, memungkinkan pengguna untuk membuat keputusan yang
        tepat dan bijaksana dalam menjaga kesehatan dan keselamatan mereka.
      </Paragraph>
    </Wrapper>
  );
};

export default AboutUsSection;
