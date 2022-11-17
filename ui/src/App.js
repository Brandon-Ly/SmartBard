import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from "./pages/Home.js";
import Post from "./pages/Post.js"
import NavBar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/post/:postID" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
