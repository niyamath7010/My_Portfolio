import React from "react";
import "./card.css"

function ProjectCard(props){
    return(
        <>
            <div className="main_card_container">
                <div className="card_container">
                    <div className="cards">
                       <img className="cardImg" src={props.image} alt="no pic" />
                       <p style={{color:"red"}}>{props.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;