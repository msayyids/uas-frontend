import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 384px;
  text-align: center;
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #073B4C;
`;

export const CardNumbers = styled.div`
  margin-top: 10px;
`;

export const NumberItem = styled.div`
  text-align: left;
  position: relative;
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  
  span {
    font-weight: bold;
    display: block;
  }

  color: ${(props) => {
    if (props.status === 'confirmed') return '#10b981';
    if (props.status === 'recovered') return '#0ea5e9';
    if (props.status === 'death') return '#dc2626';
    return '#000';
  }};

  &:before {
    text-align: left;
    content: attr(data-title);
    color: #64748B;
    display: block;
    margin: 4px;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
