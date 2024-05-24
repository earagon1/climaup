import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.css'; 

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar" expand="sm">
      <Navbar.Brand href="#home">ClimaUP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#acerca-de">Acerca de</Nav.Link>
          <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
          <Nav.Link href="#funcionalidad">Funcionalidad</Nav.Link>
          <Nav.Link href="#consultar">Consultar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
