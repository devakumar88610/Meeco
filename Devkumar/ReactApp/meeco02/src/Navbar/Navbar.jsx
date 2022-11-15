import React from "react";
import Logo from "../Images/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import { SocialMedia } from "../data";

import Container from "react-bootstrap/Container";

import Searchbar from "./Searchbar";

function NavigationBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open && <Searchbar />}
      <nav
        style={{ backgroundColor: "#0541a8" }}
        expand='lg'
        className='navbar navbar-expand-lg text-white'
      >
        <div className='container'>
          <Nav>
            <Navbar.Brand className='text-white' style={{ fontSize: "18px" }}>
              Welcome to Meeco1
            </Navbar.Brand>
          </Nav>

          <Nav className='justify-content-center'>
            {SocialMedia.map(({ icon, link, color }, index) => {
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

          <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
            <div className="header__bottom-right d-flex justify-content-end align-items-center">
              <div className="main-menu menu_wrapper_one">
                <nav id="mobile-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about">About Us </NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink>
                      <ul className="submenu">
                        <li><NavLink to="/graphicdesign">Graphic Design</NavLink></li>
                        <li><NavLink to="/webdevelopment">Web Development</NavLink></li>
                      </ul>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact Us</NavLink></li>
                  </ul>
                </nav>
              </div>
              <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                <button type='submit' className='button__nav'>Get a Quote</button>
              </div>
              <div className="sidebar__menu d-lg-none">
                <div className="sidebar-toggle-btn" id="sidebar-toggle">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          </div>
          <button
            className='btn__icon mr-4 ml-3 '
            onClick={() => setOpen(true)}
          >
            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>


        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;
