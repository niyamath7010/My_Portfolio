import React from "react";
import "./PortFolio.css"
import ProjectCard from "./ProjectsCards";

function Portfolio(){
    return(
        <>
            <div className="main_port_container">
                <div className="port_container">
                    <div className="port_title">
                        <h1 style={{color:"white" , textAlign:"center" , paddingTop:"20px" , fontFamily:"monospace"}}>Front End React Projects</h1>
                    </div>
                    {/* <div className="grid_continer">
                        <div className="grid_container1">
                            <a href="https://tictaktoebynk.netlify.app" target="_blank" rel="noopener noreferrer">
                                <img className="ticTok" src="./life.jpg" alt="no pic found" />
                            </a>
                        </div>
                        <div className="grid_container2">
                             
                        </div>
                        <div className="grid_container3">
                             
                        </div>
                        <div className="grid_container4">
                              
                        </div>
                        <div className="grid_container5">
                             
                        </div>
                        <div className="grid_container6">
                             
                        </div>
                        <div className="grid_container7">
                             
                        </div>
                    </div> */}
                    
                        <div className="projectlist">
                            <ProjectCard/>
                        </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio;



