import React from "react";
import "./About.css"

function About(){
    return(
        <>
            <div className="about_main_conatiner">
                <div className="about_container">
                    <div className="block glow">
                        <h2 className="about_title">About Me</h2><br/><br/>
                        <p className="my_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
                         when an unknown printer took a galley of type and scrambled it to make a <br/>
                         type specimen book. It has survived not only five centuries, but also the leap <br/>
                         into electronic typesetting, remaining essentially unchanged. It was popularised <br/>
                         in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br/>
                          and more recently with desktop publishing software like Aldus PageMaker including<br/>
                           versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;