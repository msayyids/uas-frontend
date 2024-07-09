import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: white;
`;

export const InnerContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (min-width: 1280px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #10b981;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #0284c7; 
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    padding-bottom: 2.5rem;
    font-size: 1.25rem;
  }
`;
export const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
`;

export const TableRow = styled.tr`
  background-color: white;
`;

export const TableHeader = styled.th`
  padding: 0.5rem;
  border: 1px solid #cbd5e0; 
  color: #10b981; 
`;

export const TableBody = styled.tbody``;