import React from "react";
import './navbar.css'
import { Route , Routes } from 'react-router-dom';
import NavIcons from "./Nav_icons";
import Education from "./Education";
import MainHome from "./MainHome";
import Contact from "./Contact";
import About from "./About";

function MainNav(){
    return(
        <>
            <div className="main_container">
                <div className="container">
                   <div className="nav_bars"> 
                    <NavIcons text="Home" path_test="/home" />
                    <NavIcons text="Education" path_test="/education" />
                    <NavIcons text="About Me" path_test="/about" />
                    <NavIcons text="Portfolio" path_test="/portfolio" />
                    <NavIcons text="Contact" path_test="/contact" />
                        <Routes>
                            <Route path="home" element={<MainHome/>} ></Route>
                            <Route path="education" element={<Education/>}></Route>
                            <Route path="contact" element={<Contact/>}></Route>
                            <Route path="About" element={<About/>}></Route>
                        </Routes>
                   </div> 
                </div>
            </div>
        </>
    )
}

export default MainNav;

{/* <Span text="Home" path_test="/home"></Span> */}
{/* <Route path="/education" element={<Education/>}></Route> */}