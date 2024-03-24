import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Works from "../Pages/Works/Works";
import Resume from "../Pages/Resume/Resume";
import About from "../Pages/About/About";

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/works" element={<Works />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}

export default Routers;