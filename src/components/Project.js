import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Project(props){
    const pp = props.props;
    var h = "headerdivid"+pp.id;
    var t = "title2id2"+pp.id;
    return(
        <div id={h} className="headerdiv revGoUp">
            <div className="tit">
                <p id={t} className="title2">{pp.title}</p>
                <Link target={"_blank"} to={pp.link} className="linktopro">{pp.link}</Link>
                <div id="videos2id" className="videos">
                    <video controls autoPlay width={"80vw"} height={"50vh"}>
                        <source src={pp.video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div> 
    )
}

export default Project;