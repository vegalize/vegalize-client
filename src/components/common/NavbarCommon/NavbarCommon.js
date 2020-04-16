import React from "react";
import "./NavbarCommon.scss";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const NavbarCommon = () => {
  return (
    <Navbar className="NavbarCommon" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Produtos</Nav.Link>
        <Nav.Link href="#pricing">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarCommon;
