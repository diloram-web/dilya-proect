import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Mugalim from "./routes/Mugalim";
import Raspisaniya from "./routes/Raspisaniya";
import {Route, Routes} from 'react-router-dom';





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mugalim" element={<Mugalim/>}/>
        <Route path="/raspisaniya" element={<Raspisaniya/>}/>
      </Routes>
    
     
    </>
  );
}

export default App;
