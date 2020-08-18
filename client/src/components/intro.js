import React from "react";
import Typical from "react-typical";
import logo from "../images/Profile Picture.jpg";

function Intro() {
    return (
        <div className="intro">
            <img className="logo" alt="Carlos Gasperi" src={logo} />
            <Typical
            steps={["Carlos Gasperi", 1000]}
            loop={Infinity}
            wrapper="h1"
            />
            <p>I am a full-stack web developer.</p>
            <p>Feel free to take a look at my latest projects on the <a>projects</a> page.</p>
        </div>
    )
}

export default Intro;