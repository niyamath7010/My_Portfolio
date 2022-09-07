import React from "react";
import "./MainHome.css"
import FollowMe from "./followMe";

function MainHome(){
    return(
        <>
            <div className="home_main_container">
                <div className="home_container">
                    <div className="img_container">
                        <img className="my_pic" src="image.jpg" alt="no pic found" />
                    </div>
                    <div className="my_profile">
                        <h1 className="my_name">Niyamathullah</h1>
                        <h2 className="my_language">React  Developer</h2>
                      <div className="main_btn">
                        <a href="resume786.pdf"
                           download= "resume786.pdf">
                            <button className="buttons resumeBtn">Resume</button>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="followContant">
                    <FollowMe/>
                </div>
            </div>
        </>
    )
}

export default MainHome;