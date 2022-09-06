import React from "react";
import './navbar.css'
import { Route , Routes } from 'react-router-dom';
import NavIcons from "./Nav_icons";
import Education from "./Education";
import MainHome from "./MainHome";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolia";

function MainNav(){
    return(
        <>
            <div className="main_container desing">
                <div className="container">
                   <div className="nav_bars "> 
                    <NavIcons text="Home" path_test="/" />
                    <NavIcons text="Education" path_test="/education" />
                    <NavIcons text="About Me" path_test="/about" />
                    <NavIcons text="Projects" path_test="/Projects" />
                    <NavIcons text="Contact" path_test="/contact" /> 
                        <Routes>
                            <Route path="/" element={<MainHome/>} />
                            <Route path="education" element={<Education/>}/>
                            <Route path="About" element={<About/>}/>
                            <Route path="Projects" element={<Portfolio/>}/>
                            <Route path="contact" element={<Contact/>}/>
                        </Routes>
                   </div> 
                </div>
            </div>
        </>
    )
}

export default MainNav;

