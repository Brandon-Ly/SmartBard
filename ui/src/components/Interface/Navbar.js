import React from 'react'
import {useLocation} from 'react-router-dom'
import {Navbar,  Container, Button} from 'react-bootstrap'
import "./style.css"
import logoPath from "../../images/overbrook.png"

export default function NavBar() {

  const {pathname} = useLocation();

  const LoginPage = (pathname === "/" ? true : false)

  return (
    <Navbar className="custom-navbar" variant="light" expand="lg" >

      <Container>
        <Navbar.Brand href={LoginPage ? "/" : "/home"}>
            <img src={logoPath} 
            alt="overbrook logo"
            height="50px" 
            width="250px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {LoginPage ?
            <React.Fragment></React.Fragment>
          :
          <React.Fragment>
            <Button variant="warning" href="/" style={{padding: "10px", margin: "10px"}} >Logout</Button>
            <Button variant="warning" href="/request" style={{padding: "10px", margin: "10px"}} >New Request</Button>
          </React.Fragment>
          }  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
