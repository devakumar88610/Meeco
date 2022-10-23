import {Link} from "react-router-dom";
import React from "react";
import Logo from "../Images/Logo.svg";
import "./Navbar.css";
import {Links} from "../data";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

const NavbarSec = () => {
  return (
    <Container>
      <Navbar bg='light' variant='light'>
        <Col md={3}>
          <Navbar.Brand to='/'>
            <img src={Logo} alt='Meeco' width={200} />
          </Navbar.Brand>
        </Col>

        <Col md={6}>
          <div className='collapse navbar-collapse justify-content-center'>
            <ul className='navbar-nav text-center'>
              {Links.map(({name, path}, index) => {
                return (
                  <li key={index} className='nav-item active'>
                    <Nav.Link className='nav-link' href={path}>
                      {name}
                    </Nav.Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>

        <Col md={3}>
          <Button className='btn mr-4' type='submit' onClick={"submit"}>
            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
          </Button>

          <Button className='btn btn-mycolor'>Get in Touch</Button>
        </Col>
      </Navbar>
    </Container>
  );
};
export default NavbarSec;
