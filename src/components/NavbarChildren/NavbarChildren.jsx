import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListItem = styled.li`
  color: white;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: white;
  }

  list-style: none;
`;

const NavbarChildren = ({ text, path }) => {
  return (
    <ListItem>
      <NavLink to={path}>{text}</NavLink>
    </ListItem>
  );
};

export default NavbarChildren;
