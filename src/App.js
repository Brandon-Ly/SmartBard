import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Request from './pages/Request.js'
import RequestCreate from './pages/RequestCreate.js'
import NavBar from './components/Interface/Navbar'
import ThemeContext, {themes} from './themes/theme-context'
import Font from './components/Settings/Font';
import FontSize from './components/Settings/FontSize';
import Slider from './components/Settings/Slider';




function App() {

  const [theme, setTheme] = useState(themes.main);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  function handleTheme(color) {
    switch(color) {
      case 'main':
        setTheme(themes.main);
        localStorage.setItem('theme', JSON.stringify(color));
        break;
      case 'purple':
        setTheme(themes.purple);
        localStorage.setItem('theme', JSON.stringify(color));
        break;
      case 'orange':
        setTheme(themes.orange);
        localStorage.setItem('theme', JSON.stringify(color));
        break;
      default:
        break;
    }
  }

  return (
    
    <div>
        <ThemeContext.Provider value={theme}>
          <NavBar />
          <Routes>
            <Route index element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/post/:postID' element={<Post />} />
            <Route path='/request' element={<Request />} />
            <Route path='/create' element={<RequestCreate />} />
          </Routes>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header >
              <Modal.Title>
                Settings
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Font />
              <FontSize />
              <Slider />
              <h1>Select Theme</h1>
              <div>
                <button className='yellowredButton' onClick={() => handleTheme('main')}></button>
              </div>
              <div>
                <button className='purpleblackButton' onClick={() => handleTheme('purple')}></button>
              </div>
              <div>
                <button className='orangeblueButton' onClick={() => handleTheme('orange')}></button>
              </div>
            </Modal.Body>
          </Modal>

          <Button className='border border-success rounded-circle float-end' size='sm' onClick={handleShow}>Settings</Button>
        </ThemeContext.Provider>
    </div>
    
  );
}

export default App;
