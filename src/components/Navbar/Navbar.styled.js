import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #10b981;
  position: sticky;
  top: 0;
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Brand = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

export const Menu = styled.div`
  display: ${props => (props.$isMobileMenuOpen ? 'block' : 'none')};
  
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    width: auto;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  ;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: ${props => (props.isMobileMenuOpen ? 'block' : 'none')};
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;
