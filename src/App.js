import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AuthProvider from './components/Authentication/AuthProvider';
import AuthPrivateRoute from './components/Authentication/AuthPrivateRoute.js';
import AdminPrivateRoute from './components/Authentication/AdminPrivateRoute';
import UserPrivateRoute from './components/Authentication/UserPrivateRoute';
import NavBar from './components/Interface/Navbar';
import FontSize from './components/Settings/FontSize';
import Theme from './components/Settings/Theme';
import FontColor from './components/Settings/FontColor';
import ThemeContext, {Themes} from './components/Settings/Theme-Context';
import FontSizeContext from './components/Settings/FontSize-Context.js';
import FontColorContext from './components/Settings/FontColor-Context.js';
import Voice from './components/Settings/Voice';
import VoiceContext from './components/Settings/Voice-Context';

import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Post from './pages/Post.js';
import Request from './pages/Request.js';
import RequestCreate from './pages/RequestCreate.js';
import RequestDetails from './pages/RequestDetails.js';
import Admin from './pages/Admin.js';
import AdminRequestDetails from './pages/AdminRequestDetails.js';

import settingsCog from "./images/settings-cog.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [theme, setTheme] = useState(Themes.main);
    const [fontSize, setFontSize] = useState(24);
    const [fontColor, setFontColor] = useState('#000000');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [voice, setVoice] = useState("Daria");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        if ((JSON.parse(localStorage.getItem('theme'))) == null) {
            localStorage.setItem('theme', JSON.stringify(Themes.main));
        }
        if ((JSON.parse(localStorage.getItem('fontSize'))) == null) {
            localStorage.setItem('fontSize', JSON.stringify(fontSize));
        }
        if ((JSON.parse(localStorage.getItem('fontColor'))) == null) {
            console.log("setting color to default");
            localStorage.setItem('fontColor', JSON.stringify(fontColor));
        }
        const retrievedTheme = JSON.parse(localStorage.getItem('theme'));
        const retrievedFontSize = localStorage.getItem('fontSize');
        const retrievedFontColor = JSON.parse(localStorage.getItem('fontColor'));
        setTheme(retrievedTheme);
        setFontSize(parseInt(retrievedFontSize));
        setFontColor(retrievedFontColor);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }, []);


    return (
        <div style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, overflowY: 'auto'}}>
            <AuthProvider>
                <FontSizeContext.Provider value={fontSize}>
                    <ThemeContext.Provider value={theme}>
                        <FontColorContext.Provider value={fontColor}>
                            <VoiceContext.Provider value={voice}>
                                <NavBar/>
                                {isLoading ? (<div>Loading. . .</div>) : (
                                    <Routes>
                                        <Route index element={<Login/>} />
                                        <Route element={<AuthPrivateRoute />}>
                                            <Route path='/home' element={<Home />}/>
                                            <Route path='/home' element={<Home/>} 
                                                onEnter={window.speechSynthesis.cancel()}
                                                onLeave={window.speechSynthesis.cancel()}
                                                />
                                            <Route path='/home/:postID' element={<Post/>}
                                                onEnter={window.speechSynthesis.cancel()}
                                                onLeave={window.speechSynthesis.cancel()}
                                                />
                                            <Route path='/request' element={<Request/>}/>
                                            <Route element={<UserPrivateRoute />}>
                                                <Route path='/request/:status/:postID' element={<RequestDetails/>}
                                                onEnter={window.speechSynthesis.cancel()}
                                                onLeave={window.speechSynthesis.cancel()}
                                                />
                                            </Route>
                                            <Route path='/create' element={<RequestCreate/>}
                                                onEnter={window.speechSynthesis.cancel()}
                                                onLeave={window.speechSynthesis.cancel()}
                                            />
                                            <Route element={<AdminPrivateRoute/>}>
                                                <Route path='/admin' element={<Admin/>}
                                                    onEnter={window.speechSynthesis.cancel()}
                                                    onLeave={window.speechSynthesis.cancel()}
                                                />
                                                <Route path='/adminrequest/:status/:postID' element={<AdminRequestDetails/>}
                                                    onEnter={window.speechSynthesis.cancel()}
                                                    onLeave={window.speechSynthesis.cancel()}
                                                />
                                            </Route>
                                            <Route path="*" element={<Login />}
                                                onEnter={window.speechSynthesis.cancel()}
                                                onLeave={window.speechSynthesis.cancel()}
                                            />
                                        </Route>

                                    </Routes>
                                )}

                                <Modal show={show} onHide={handleClose} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Accessibility Settings
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <h4>Content Settings</h4>
                                            <Row>
                                                <Col>
                                                    <FontSize
                                                        fontSize={fontSize}
                                                        setFontSize={(number) => {
                                                            localStorage.setItem('fontSize', number);
                                                            setFontSize(number);
                                                        }
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    <FontColor
                                                        fontColor={fontColor}
                                                        setFontColor={(color) => {
                                                            localStorage.setItem('fontColor', JSON.stringify(color));
                                                            setFontColor(color);
                                                        }} 
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Theme
                                                        theme={theme}
                                                        setTheme={(newTheme) => {
                                                            localStorage.setItem('theme', newTheme);
                                                            setTheme(newTheme);
                                                        }
                                                        }
                                                    />
                                                </Col>
                                                <Col>

                                                </Col>
                                            </Row>
                                            
                                        </Container>
                                        <br></br>
                                        {/* <Container>
                                            <h4>Voice Settings</h4>
                                            <Row>
                                                <Col>
                                                    <Voice
                                                        voice={voice}
                                                        setVoice={(newVoice) => {
                                                            localStorage.setItem('voice', newVoice);
                                                            setVoice(newVoice);
                                                        }
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    
                                                </Col>
                                            </Row>
                                        </Container> */}
                                    </Modal.Body>
                                </Modal>

                                <div style={{position: 'fixed', bottom: '20px', right: '20px'}}>
                                    <Button className='border border-success rounded-circle' size='sm'
                                            onClick={handleShow}><img  
                                                                    className='accessibility-logo' 
                                                                    src={settingsCog}
                                                                    alt="accessibility button"
                                                                    />
                                    </Button>
                                </div>
                            </VoiceContext.Provider>
                        </FontColorContext.Provider>
                    </ThemeContext.Provider>
                </FontSizeContext.Provider>
            </AuthProvider>
        </div>
    );
}

export default App;
