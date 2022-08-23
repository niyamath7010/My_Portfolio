import React from "react";
import "./NavText.css"
import { Link } from "react-router-dom";

function NavIcons(props){
    return(
        <>
            <Link className="nav_text" to={props.path_test} >{props.text}</Link>
        </>
    )
}


export default NavIcons