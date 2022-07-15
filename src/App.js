import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import React, {useState} from 'react';
import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

import TabBar from "./components/TabBar";
import HideAppBar from "./components/HideAppBar";
import { ImageListItemBar } from "@mui/material";


function App() {


  return (
    <BrowserRouter >
      <div>
        
        <HideAppBar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
     
        <TabBar/>
      </div>
      
      
    
    </BrowserRouter>
  );
}

export default App;
