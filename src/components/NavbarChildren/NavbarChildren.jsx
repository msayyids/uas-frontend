import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Link to={path}>{text}</Link>
    </ListItem>
  );
};

export default NavbarChildren;
