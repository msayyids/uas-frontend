
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 450px;
  text-align: center;
  border: 1px solid #cbd5e1;
  padding: 1.5rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 1.5rem auto;

  @media (min-width: 768px) {
    padding:3rem 0rem;
    margin-bottom: 0;
  }
`;

export const StatusText = styled.p`
  font-size: 39px;
  font-weight: 500;
  color: #073B4C;


  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TotalText = styled.p`
  font-size: 61px;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  color: ${(props) => {
    if (props.status === 'confirmed') return '#10b981';
    if (props.status === 'recovered') return '#0ea5e9';
    return '#dc2626';
  }};
`;
