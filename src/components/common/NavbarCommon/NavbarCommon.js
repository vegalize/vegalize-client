import React from "react";
import { Link } from "react-router-dom";
import "./NavbarCommon.scss";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const NavbarCommon = () => {
  return (
    <Navbar className="NavbarCommon" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/produtos">
          <Nav.Link href="#produtos">Produtos</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarCommon;
