import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {SocialMedia} from "../data";
import "../Components/NavbarTop.css";

class NavbarTop extends Component {
  render() {
    return (
      <Navbar
        style={{backgroundColor: "#21367F"}}
        expand='lg'
        className='text-white'
      >
        <Container>
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
                    className='text-white pl-4'
                    style={{fontSize: "18px"}}
                    href={link}
                  >
                    <i className={icon}></i>
                  </Nav.Link>
                </li>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarTop;
