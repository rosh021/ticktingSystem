import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav">
        <Container>
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink">Login</Nav.Link>
              <Nav.Link className="navLink">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>
    </div>
  );
};
