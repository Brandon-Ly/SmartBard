import React from 'react'
import {Navbar, Nav,  Container} from 'react-bootstrap'
import "./components.css"
import logoPath from "../images/overbrook.png"

export default function NavBar() {
  return (
    <Navbar className="custom-navbar" variant="light" expand="lg" >

      <Container>
        <Navbar.Brand href="/">
            <img src={logoPath} 
            alt="overbrook logo"
            height="50px" 
            width="250px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}
