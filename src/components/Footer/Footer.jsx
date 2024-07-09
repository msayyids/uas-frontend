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
  Copywright,
} from './Footer.styled';

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <Brand>Covid ID <br /><Copywright>developed by Msayyids</Copywright></Brand>
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
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </Icon>
          </MobileMenuButton>
          {!isMobileMenuOpen && (
            <Menu>
              <MenuList>
                <NavbarChildren text="Global" path="/" />
                <NavbarChildren text="Indonesia" path="/covid/indonesia" />
                <NavbarChildren text="Provinsi" path="/covid/indonesia/local" />
                <NavbarChildren text="About" path="/covid/about" />
              </MenuList>
            </Menu>
          )}
        </NavContent>
      </NavContainer>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuList>
            <NavbarChildren text="Global" path="/" />
            <NavbarChildren text="Indonesia" path="/covid/indonesia" />
            <NavbarChildren text="Provinsi" path="/covid/indonesia/local" />
            <NavbarChildren text="About" path="/covid/about" />
          </MenuList>
        </MobileMenu>
      )}
    </Nav>
    
  );
};

export default Footer;
