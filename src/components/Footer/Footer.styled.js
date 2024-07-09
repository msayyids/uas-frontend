import styled from 'styled-components';

export const Copywright =  styled.p`
font-size: 25px;
font-weight: 400;
line-height: 37.5px;
text-align: left;

`

export const Nav = styled.nav`
  background-color: #06D6A0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Brand = styled.h1`
  font-size: 39px;
`;

export const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  & > li {
    margin: 0 10px;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > li {
      margin: 10px 0;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    background-color: #00b894;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
