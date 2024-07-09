
import styled, { css } from 'styled-components';

const primaryStyles = css`
  color: white;
  background-color: #34d399;
  border: none;
  &:hover {
    background-color: #10b981;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.5); 
  }
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  padding: 0.625rem 1.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const secondaryStyles = css`
`;

const StyledButton = styled.button`
  ${(props) => props.category === 'Primary' && primaryStyles}
  ${(props) => props.category === 'Secondary' && secondaryStyles}
`;


const Button = ({ category = 'Primary', text }) => {

  const handleClick = () => {
    window.open("https://vaksin.kemkes.go.id/#/vaccines","_blank")
  }
  return <StyledButton onClick={handleClick} category={category}>{text}</StyledButton>;
};

export default Button;
