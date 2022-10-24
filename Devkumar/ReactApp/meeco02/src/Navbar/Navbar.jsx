import React from "react";
import Logo from "../Images/Logo.svg";
import {Links} from "../data";
import "../index.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Searchbar from "./Searchbar";

function NavigationBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Navbar bg='light' expand='lg' className='sticky-nav'>
        <Container className='py-2'>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='Meeco' width={200} />
          </Navbar.Brand>

          <Navbar.Toggle
            className='fa-solid fa-burger-soda ml-auto'
            aria-controls='navbarScroll'
          />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='m-auto my-2 my-lg-0'
              style={{maxHeight: "300px"}}
              navbarScroll
            >
              {Links.map(({name, path}, index) => {
                return (
                  <li key={index}>
                    <Nav.Link
                      style={{fontWeight: 500, fontSize: 18}}
                      className='justify-content-center px-3'
                      href={path}
                    >
                      {name}
                    </Nav.Link>
                  </li>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <button className='btn__icon mr-4' onClick={() => setOpen(true)}>
            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>

          <button type='submit' className='button__primary'>
            Get in Touch
          </button>
        </Container>
      </Navbar>
      <Searchbar show={open} onClose={() => setOpen(false)}></Searchbar>
    </>
  );
}
export default NavigationBar;
