import React from "react";
import "./followMe.css"

function FollowMe(){
    return(
        <>
            <div className="mainFollow_container">
                <div className="followContainer">
                    <span className="followMeText">Follow Me On : </span>
                    <img className="logos" src="instagram-logo.png" alt="no pic" />
                    <img className="logos" src="facebook-logo.png" alt="no pic" />
                    <img className="logos" src="linkedin-logo.png" alt="no pic" />
                    <img className="logos" src="github-logo.png" alt="no pic" />
                </div>
            </div>
        </>
    )
}

export default FollowMe;