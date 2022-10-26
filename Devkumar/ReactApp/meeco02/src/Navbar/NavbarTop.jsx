import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {SocialMedia} from "../data";
import "../Navbar/NavbarTop.css";

class NavbarTop extends Component {
  render() {
    return (
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
    );
  }
}

export default NavbarTop;
