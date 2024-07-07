
import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 2.5rem 0;
  background-color: #f1f5f9;
`;

export const InnerContainer = styled.div`
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
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

export const FormSection = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: #10b981;
  font-weight: 600;
  margin: 0.75rem 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Select = styled.select`
  border: 1px solid #10b981;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  padding: 0.625rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  border: 1px solid #10b981;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  padding: 0.625rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  color: white;
  background-color: #10b981;
  border: none;
  &:hover {
    background-color: #059669;
  }
  &:focus {
    outline: none;
  }
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  width: 100%;
  padding: 0.625rem;
  text-align: center;

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 0.875rem;
`;
