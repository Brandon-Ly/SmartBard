import React, {useContext} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Button, Container, Navbar} from 'react-bootstrap'
import ThemeContext from '../Settings/Theme-Context'
import logoPath from "../../images/overbrook.png"
import useAuth from '../../hooks/UseAuth'
import "./Style.css"

export default function NavBar() {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {logout} = useAuth();
    const theme = useContext(ThemeContext);

    const LoginPage = (pathname === "/" ? true : false)

    const handleLogout = function () {
        navigate('/');
        logout();
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
    }


    return (
        <Navbar style={{backgroundColor: theme.background}} className="custom-navbar" variant="light" expand="lg">

            <Container>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => LoginPage ? navigate('/') : navigate('/home')}>
                    <img src={logoPath}
                         alt="overbrook logo"
                         height="50px"
                         width="250px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {LoginPage ?
                        <React.Fragment></React.Fragment>
                        :
                        <React.Fragment>
                            <Button onClick={handleLogout} style={{
                                backgroundColor: theme.foreground,
                                color: theme.text,
                                border: theme.foreground,
                                padding: "10px",
                                margin: "10px"
                            }}>Logout</Button>
                            <Button onClick={() => navigate('/request')} style={{
                                backgroundColor: theme.foreground,
                                color: theme.text,
                                border: theme.foreground,
                                padding: "10px",
                                margin: "10px"
                            }}>New Request</Button>
                        </React.Fragment>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
