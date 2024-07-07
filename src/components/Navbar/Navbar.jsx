import { useState } from 'react';
import NavbarChildren from '../NavbarChildren/NavbarChildren';
import {
  Nav,
  NavContainer,
  NavContent,
  Brand,
  Menu,
  MenuList,
  MobileMenuButton,
  MobileMenu,
  Icon,
} from './Navbar.styled';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <Brand>Covid ID</Brand>
          <Menu>
            <MenuList>
              <NavbarChildren text="Global" path="/" />
              <NavbarChildren text="Indonesia" path="/covid/indonesia" />
              <NavbarChildren text="Provinsi" path="/covid/indonesia/local" />
              <NavbarChildren text="About" path="/covid/about" />
            </MenuList>
          </Menu>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <Icon
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </Icon>
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen}>
        <MenuList>
          <NavbarChildren text="Global" path="/" />
          <NavbarChildren text="Indonesia" path="/covid/indonesia" />
          <NavbarChildren text="Provinsi" path="/provinsi" />
          <NavbarChildren text="About" path="/about" />
        </MenuList>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
