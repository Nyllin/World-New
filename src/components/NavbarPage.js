import React, { useState } from "react";
import user from '../images/user.jpg'
import "../styles/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
const NavbarPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar id="menu" expand="lg" className="navbar-container bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className="navbar-brand">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home" className="nav-link ms-2">Home</Nav.Link>
          <Nav.Link href="#discovery"  className="nav-link ms-2">Discovery</Nav.Link>
          <Nav.Link href="#photos"  className="nav-link ms-2">Photos</Nav.Link>
          <Nav.Link href="#contact"  className="nav-link ms-2">Contact</Nav.Link>
          <Nav.Link href="#menu" className="nav-img ms-2"><img src={user} alt="user"/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavbarPage;
