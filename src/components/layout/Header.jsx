import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  a {
    margin-right: 20px;
  }
`;

export default function Header() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
          <Link to="/calender">Calender</Link>
          <Link to="/sidebar">Sidebar</Link>
          <Link to="/carousel">Carousel</Link>
        </li>
      </ul>
    </Nav>
  );
}
