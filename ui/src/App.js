import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Home from "./pages/Home.js"
import Post from "./pages/Post.js"
import Login from "./pages/Login.js"
import NavBar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/post/:postID" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
