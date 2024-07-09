
import Button from '../Button/Button';
import Subtitle from '../SubTitle/Subtitle';
import Title from '../Title/Title';
import HeroImage from '../../asset/hero-image.png'
import {
  HeroContainer,
  HeroContent,
  TextContainer,
  Description,
  ImageContainer,
  StyledImage,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextContainer>
          <Title text={"Covid ID"}/>
          <Subtitle text={"Monitoring Perkembangan Covid"}/>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since.
          </Description>
          <Button category={'Primary'} text={'Vaccine'} />
        </TextContainer>
        <ImageContainer>
          <StyledImage
            src={HeroImage}
            alt=""
          />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
