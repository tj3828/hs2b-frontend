import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
      <Link className="navbar-brand" to="/home">Hs2b</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/board">테스트</Link>
          <Link className="nav-link" to="/">테스트 1</Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <Link className="dropdown-item" to="/">선택 1</Link>
            <Link className="dropdown-item" to="/">선택 2</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/">선택 3</Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/">도움말</Link>
          <Link className="nav-link" to="/">로그인</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;