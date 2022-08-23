import React from "react";
import "./MainHome.css"

function MainHome(){
    return(
        <>
            <div className="home_main_container">
                <div className="home_container">
                    <div className="img_container">
                        <img className="my_pic" src="https://i1.wp.com/www.instantshift.com/assets/uploads/2009/12/beobawp.jpg" alt="no pic found" />
                    </div>
                    <div className="my_profile">
                        <h1 className="my_name">Niyamathullah</h1>
                        <h2 className="my_language">React_Developer</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHome