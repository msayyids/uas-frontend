
import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin: 3rem 1rem;
  @media (min-width: 768px) {
    margin: 5rem 2rem;
  }
  @media (min-width: 1024px) {
    margin: 5rem 4rem;
  }
  @media (min-width: 1280px) {
    margin: 5rem 5rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;


export const Description = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  font-weight: 400;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
`;
