import React from "react";
import Logo from "../Images/Logo.svg";
import {Links} from "../data";
import "../Navbar/Navbar.css";
import {Nav, Navbar} from "react-bootstrap";
import {SocialMedia} from "../data";

import Container from "react-bootstrap/Container";

import Searchbar from "./Searchbar";

function NavigationBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open && <Searchbar />}
      <nav
        style={{backgroundColor: "#0541a8"}}
        expand='lg'
        className='navbar navbar-expand-lg text-white'
      >
        <div className='container'>
          <Nav>
            <Navbar.Brand className='text-white' style={{fontSize: "18px"}}>
              Welcome to Meeco
            </Navbar.Brand>
          </Nav>

          <Nav className='justify-content-center'>
            {SocialMedia.map(({icon, link}, index) => {
              return (
                <li key={index}>
                  <Nav.Link
                    target='_blank'
                    className=' btn__sm__icon'
                    href={link}
                  >
                    <i className={icon}></i>
                  </Nav.Link>
                </li>
              );
            })}
          </Nav>
        </div>
      </nav>

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
          <button
            className='btn__icon mr-4 ml-3 '
            onClick={() => setOpen(true)}
          >
            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>

          <button type='submit' className='button__nav'>
            Get in Touch
          </button>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;
