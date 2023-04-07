import React, {useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Container, Navbar} from 'react-bootstrap';
import ThemeContext from '../Settings/Theme-Context';
import useAuth from '../../hooks/UseAuth';
import logo from "../../images/overbrook.png";
import "./Navbar.css";

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

    const handleAdmin = function () {
        navigate('/admin');
    }


    return (
        <Navbar style={{backgroundColor: theme.background}} className="custom-navbar" variant="light" expand="lg">
            <Container>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => LoginPage ? navigate('/') : navigate('/home')}>
                    <img src={logo} className="navbar-logo"
                         alt="Overbrook logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {LoginPage ?
                        <React.Fragment></React.Fragment>
                        :
                        <React.Fragment>
                            <Button className="navbar-button" onClick={handleAdmin}
                                    style={{
                                        backgroundColor: theme.foreground,
                                        color: theme.text,
                                        border: theme.foreground
                                    }}> Admin</Button>
                            <Button className="navbar-button" onClick={handleLogout}
                                    style={{
                                        backgroundColor: theme.foreground,
                                        color: theme.text,
                                        border: theme.foreground
                                    }}>Logout</Button>
                        </React.Fragment>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
