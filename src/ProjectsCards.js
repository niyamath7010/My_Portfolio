import React from "react";


function ProjectCard(props){
    return(
        <>
            <div className="main_card_container">
                <div className="card_container">
                    <img src={props.image} alt="no pic" />
                </div>
            </div>
        </>
    )
}

export default ProjectCard;