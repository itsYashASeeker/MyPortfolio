import { faFigma, faGithub, faInstagram, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MongoLogo from "../src/assets/mongo2.png";
import SqlLogo from "../src/assets/sql.png";
import SolLogo from "../src/assets/sol.png";
import DjangoRestLogo from "../src/assets/django-rest.png";
import { faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import "../src/anim.css";
import "../src/index.css";
import "../src/bg1.css";
import "../src/index2.css";
import FolderIcon from "./assets/folder.png";
// import MyImage from "./assets/Yash Kamlesh Chauhan 2.png";
import MyImage from "./assets/yash1.png";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

export default function SecP() {

    const [pOpen, setPOpen] = useState();
    const [currCount, setCuC] = useState(0);

    function retId(idname) {
        return document.getElementById(idname);
    }

    useEffect(() => {
        const projectF = retId("idProjectFolder").getBoundingClientRect();
        var halfShiftPos = 35;
        retId("idProjectSC").style.top = `${projectF.y + halfShiftPos}px`;
        retId("idProjectSC").style.left = `${projectF.x + halfShiftPos}px`;
        console.log(`Top: ${projectF.x} & Y: ${projectF.y}`);
    }, []);

    function handleSoft(pid, idnme, val) {
        var cc = currCount;
        cc = cc + 1;
        setCuC(cc);
        if (val) {
            retId("idAllSofts").classList.remove("bringFrontD");
            retId(idnme).classList.remove("c1");
            retId(idnme).classList.remove("openCard");
            retId(idnme).style.zIndex = `1000`;
            retId(pid).classList.remove("selectedFCard");
            return false;
        }
        else {
            retId("idAllSofts").classList.add("bringFrontD");
            // retId(idnme).classList.add("c1");
            retId(idnme).classList.add("openCard");
            retId(idnme).style.zIndex = `${1000 + cc}`;
            retId(pid).classList.add("selectedFCard");

            return true;
        }

    }

    return (<>
        <div className="divf fdirc fullbg1">
            <div className="divf mainContent">
                <div id="idAllSofts" className="allSoft">
                    {/* <div  className="softCard"> */}

                    <div id="idProjectSC" className="divf fdirc softCard">
                        <Draggable>
                            <div className="divf fdirc cProjects c1">
                                <p className="mH">#PROJECTS</p>
                                <div className="divf allProjects">
                                    <Link to="/" className="divf fdirc indProject">
                                        <button className="goToSite"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                        <p className="projectName">Project Name</p>
                                        <p className="projectDesc">udienfb uehfyegfy ueyejsnwj whvdtwfdyw dwbdywvdtff ggs uh suqusgyg uhs </p>
                                    </Link>
                                    <Link className="divf fdirc indProject">
                                        <button className="goToSite"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                        <p className="projectName">Project Name</p>
                                        <p className="projectDesc">udienfb uehfyegfy ueyejsnwj whvdtwfdyw dwbdywvdtff ggs uh suqusgyg uhs </p>
                                    </Link>
                                    <Link className="divf fdirc indProject">
                                        <button className="goToSite"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                        <p className="projectName">Project Name</p>
                                        <p className="projectDesc">udienfb uehfyegfy ueyejsnwj whvdtwfdyw dwbdywvdtff ggs uh suqusgyg uhs </p>
                                    </Link>
                                    <Link className="divf fdirc indProject">
                                        <button className="goToSite"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                        <p className="projectName">Project Name</p>
                                        <p className="projectDesc">udienfb uehfyegfy ueyejsnwj whvdtwfdyw dwbdywvdtff ggs uh suqusgyg uhs </p>
                                    </Link>
                                </div>
                            </div>
                        </Draggable>
                    </div>

                    {/* </div> */}
                </div>
                <div className="divf leftCFolders">
                    <div className="divf fullWC">
                        <button className="divf fdirc folderCard myFolder" >
                            <img src={MyImage} className="folderI" />
                            <p>About me</p>
                        </button>
                    </div>

                    <button id="idProjectFolder" className="divf fdirc folderCard" onClick={() => { const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}>
                        <img src={FolderIcon} className="folderI" />
                        <p className="folderName">Projects</p>
                    </button>
                    <button className="divf fdirc folderCard">
                        <img src={FolderIcon} className="folderI" />
                        <p className="folderName">Experience</p>
                    </button>
                    <button className="divf fdirc folderCard">
                        <img src={FolderIcon} className="folderI" />
                        <p className="folderName">Education</p>
                    </button>
                    <button className="divf fdirc folderCard">
                        <img src={FolderIcon} className="folderI" />
                        <p className="folderName">Certifications</p>
                    </button>
                </div>
                <div className="divf fdirc leftCFolders">
                    <div className="folderCard">
                        <img src={FolderIcon} className="folderI" />
                    </div>
                </div>

            </div>
            {/* <div className="fullAnim">
                <div className="anim a1"></div>
                <div className="anim a2"></div>
                <div className="anim a3"></div>
            </div>
            <div className="divf fdirc headerP">
                <p className="mainName">Yash Kamlesh Chauhan</p>
                <div className="divf socLinks">
                    <Link to="/"><FontAwesomeIcon icon={faGithub} /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div> */}
            <div className="footerPC">
                <div className="divf fdirc">
                    <p className="mypc">My Personal Computer</p>
                    <p className="myname">Yash Kamlesh Chauhan</p>
                </div>
                <div className="currTime">14:48:11</div>
            </div>
        </div>

    </>)

}