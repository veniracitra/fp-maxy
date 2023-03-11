import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import jennyLogo from "../../assets/image 1.png";
import sIcon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import "./style.css";
const ownNav = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  return (
    <Navbar bg="transparant" expand="lg" className="mt-3 own-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={jennyLogo} alt="jenny logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-class">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="mx-1"
              title="Product"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/products/haircare">
                Haircare
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/cosmetics">
                Cosmetics
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/haircolor">
                Hair Color
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/">
              Brand
            </Nav.Link>
            <Nav.Link className="nav-link" href="/">
              Shop
            </Nav.Link>
            <Container className="search-login">
              <img src={sIcon} alt="search icon" />
              {!accessToken ? (
                <a href="/login" role={"button"}>
                  Login
                </a>
              ) : (
                <img src={cart} alt="search icon" />
              )}
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ownNav;
