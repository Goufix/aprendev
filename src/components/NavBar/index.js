import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomNavbar } from './styles';

export function NavBar() {
  return (
    <CustomNavbar variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand>Aprendev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={{ color: '#fff', padding: 15 }} to="/">
              Home
            </Link>
            <Link style={{ color: '#fff', padding: 15 }} to="/challenges">
              Desafios
            </Link>
            <Link style={{ color: '#fff', padding: 15 }} to="/memberlist">
              Lista de membros
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
