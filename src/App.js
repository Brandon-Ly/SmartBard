import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Request from './pages/Request.js'
import RequestCreate from './pages/RequestCreate.js'
import NavBar from './components/Interface/Navbar'
import ThemeContext, {Themes} from './SettingFeatures/themes/theme-context'
import Font from './components/Settings/Font';
import FontSize from './components/Settings/FontSize';
import Slider from './components/Settings/Slider';
import FontContext, {fontNumber} from './SettingFeatures/fonts/font-context.js'




function App() {


  const [theme, setTheme] = useState(Themes.main);
  const [show, setShow] = useState(false);
  const [fontSize, setFontSize] = useState(24);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  function handleTheme(color) {
    switch(color) {
      case 'main':
        setTheme(Themes.main);
        localStorage.setItem('theme', JSON.stringify(Themes.main));
        break;
      case 'purple':
        setTheme(Themes.purple);
        localStorage.setItem('theme', JSON.stringify(Themes.purple));
        break;
      case 'orange':
        setTheme(Themes.orange);
        localStorage.setItem('theme', JSON.stringify(Themes.orange));
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    const retrievedTheme = JSON.parse(localStorage.getItem('theme'));
    const retrievedFontSize = localStorage.getItem('fontSize');
    setTheme(retrievedTheme);
    setFontSize(parseInt(retrievedFontSize));
  }, [])



  return (
    
    <div>
    <FontContext.Provider value={fontSize}>
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
              <FontSize 
              fontSize={fontSize}
              setFontSize={(number) => 
                {
                  localStorage.setItem('fontSize', number);
                  setFontSize(number);}
              }
              />
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
        </FontContext.Provider>
    </div>
    
  );
}

export default App;
