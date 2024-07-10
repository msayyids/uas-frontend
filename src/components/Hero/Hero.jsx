import Button from "../Button/Button";
import Subtitle from "../SubTitle/Subtitle";
import Title from "../Title/Title";
import HeroImage from "../../asset/hero-image.png";
import {
  HeroContainer,
  HeroContent,
  TextContainer,
  Description,
  ImageContainer,
  StyledImage,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextContainer>
          <Title text={"Covid ID"} />
          <Subtitle text={"Monitoring Perkembangan Covid"} />
          <Description>
            Dapatkan informasi terkini tentang situasi COVID-19 di daerah Anda.
            Kami hadir untuk memberikan Anda informasi yang akurat dan relevan,
            membantu Anda dan keluarga untuk tetap aman dan terinformasi selama
            pandemi ini.
          </Description>
          <Button category={"Primary"} text={"Vaccine"} />
        </TextContainer>
        <ImageContainer>
          <StyledImage src={HeroImage} alt="" />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
