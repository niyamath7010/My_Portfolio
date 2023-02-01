import React from "react";
import "./PortFolio.css"
// import ProjectCard from "./ProjectsCards";
// import ProjectList from "./projectList";
function Portfolio(){
    return(
        <>
            <div className="main_port_container" >
                <div className="port_container">
                    <div className="port_title">
                        <h1 style={{color:"white" , textAlign:"center" , paddingTop:"20px" , fontFamily:"monospace" }}>Front End React Projects</h1>
                    </div>
                    <div className="topContiner">
                        <div className="content">
                            <img className="topimage" src="tictok.jpg" alt="no pic found"/>
                            <div className="contentText">
                            <h3 className="tittle">TIC TOK TOE</h3>
                            <a href="https://tictaktoebynk.netlify.app" target="_blank" rel="noopener noreferrer"><button > Project Link</button></a>
                            </div>
                        </div>
                        <div className="content">
                            <img className="topimage" src="quizapp.png" alt="no pic found" />
                            <div className="contentText">
                                <h3 className="tittle">QUIZ APP</h3>
                                <a href="https://quizappbynk.netlify.app" target="_blank" rel="noopener noreferrer"><button > Project Link</button></a>
                            </div>
                        </div>
                        <div className="content">
                            <img className="topimage" src="todoimage.png" alt="no pic found"/>
                            <div className="contentText">
                                <h3 className="tittle">TODO APP</h3>
                                <a href="https://todoappbynk.netlify.app" target="_blank" rel="noopener noreferrer"><button>Project Link</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="bottmContainer">
                        <div className="contentmain">
                            <img className="bottomimageMian" src="keepclone.png" alt="no pic found" />
                            <div className="contentText">
                                <h3 className="tittle">KEEP CLONE</h3>
                                <a href="https://nkcloneapp.netlify.app" target="_blank" rel="noopener noreferrer"><button>Project Link</button></a>
                            </div>
                        </div>
                        {/* <div className="content">
                            <img className="bottomlastimg" src="tictok.jpg" alt="no pic found" />
                            <div className="contentText">
                                <h3 className="tittle">Weather App</h3>
                                <button>Project Link</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;



