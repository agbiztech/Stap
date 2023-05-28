import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Company_logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Style/Header2.css";
const Header2 = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      id="Navbars"
    >
      <Container >
        <Navbar.Brand onClick={() => navigate("/")} >
          <img src={Company_logo} className="nabvar-image"></img>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" id="Navbar-09"/>
        
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="Header-2">
            <Nav.Link eventKey={1} onClick={() => navigate("/")} id="Header-3">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate("/About-Us")}  id="Header-3" >
              About Us
            </Nav.Link>
            <Nav.Link eventKey={3} onClick={() => navigate("/Destinations")} id="Header-3">
            Destinations
            </Nav.Link>
            <Nav.Link eventKey={5} onClick={() => navigate("/Blog")} id="Header-3">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={6} onClick={() => navigate("/Contact-Us")} id="Header-3">
              Contact Us
            </Nav.Link>
            <Nav.Link eventKey={6} onClick={() => navigate("/Sign-In")} id="Header-33">
              Sign In 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
