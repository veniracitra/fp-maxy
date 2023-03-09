import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import jennyLogo from "../../assets/image 1.png";
import sIcon from "../../assets/search-icon.png";
import "./style.css";
const ownNav = () => {
  return (
    <Navbar bg="transparant" expand="lg" className="mt-3 own-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={jennyLogo} alt="jenny logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-class">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              className="mx-1"
              title="Product"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/">Haircare</NavDropdown.Item>
              <NavDropdown.Item href="/">Cosmetics</NavDropdown.Item>
              <NavDropdown.Item href="/">Hair Color</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/">
              Brand
            </Nav.Link>
            <Nav.Link className="nav-link" href="/">
              Shop
            </Nav.Link>
            <Container className="search-login">
              <img src={sIcon} alt="search icon" />
              <button>Login</button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ownNav;
