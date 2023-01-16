import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import Post from "./components/Landing/Post.js"
import Request from "./pages/Request.js"
import RequestCreate from "./pages/RequestCreate.js"
import NavBar from "./components/Interface/Navbar"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/post/:postID" element={<Post />} />
        <Route path="/request" element={<Request />} />
        <Route path="/create" element={<RequestCreate />} />
      </Routes>
    </div>
  );
}

export default App;
