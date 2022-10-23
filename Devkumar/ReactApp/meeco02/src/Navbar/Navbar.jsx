import React from "react";

import Logo from "../Images/Logo.svg";
import {Links} from "../data";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../Navbar/Navbar.css";
import Searchbar from "./Searchbar";

function NavigationBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Navbar bg='light' expand='lg' className='sticky-nav'>
        <Container className='py-2 sticky-nav'>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='Meeco' width={200} />
          </Navbar.Brand>

          <Navbar.Toggle
            className='fa-solid fa-burger-soda'
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
            <Button
              variant='outiline-color-light'
              className='second-button mr-4'
              style={{fontSize: "18px"}}
              onClick={() => setOpen(true)}
            >
              <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
            </Button>

            <Button type='submit' className='button'>
              Get in Touch
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Searchbar show={open} onClose={() => setOpen(false)}></Searchbar>
    </>
  );
}
export default NavigationBar;
