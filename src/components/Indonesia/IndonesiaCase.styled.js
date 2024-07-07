
import styled from 'styled-components';

export const Section = styled.div`
  padding: 2.5rem 0;
  background-color: #f1f5f9;
`;

export const Container = styled.div`
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

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: #10b981;
  font-weight: 600;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #0ea5e9;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 2.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
