import { faFigma, faGithub, faInstagram, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MongoLogo from "../../src/assets/mongo2.png";
import SqlLogo from "../../src/assets/sql.png";
import SolLogo from "../../src/assets/sol.png";
import NextLogo from "../../src/assets/nextjs.png";
import CanvaLogo from "../../src/assets/canva.png";
import DjangoRestLogo from "../../src/assets/django-rest.png";
import { faArrowUpRightFromSquare, faCancel, faCode, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../css/anim.css";
import "../css/index.css";
import "../css/bg1.css";
import "../css/index2.css";
import "../css/notify.css";
import "../css/media.css";
import FolderIcon from "../assets/folder.png";
import ResumeIcon from "../assets/resumeIcon.jpg";
import GrabIcon from "../assets/grab.png";
// import MyImage from "./assets/Yash Kamlesh Chauhan 2.png";
import MyImage from "../assets/yash1.png";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { certifications, education, experience, projects, volunteering } from "../data/data";


export default function MainContent() {


    const [abtOpen, setAbtOpen] = useState();
    const [pOpen, setPOpen] = useState();
    const [expOpen, setExOpen] = useState();
    const [edOpen, setEdOpen] = useState();
    const [cerOpen, setCerOpen] = useState();
    const [volOpen, setVolOpen] = useState();
    const [skOpen, setSkOpen] = useState();


    const [currCount, setCuC] = useState(0);
    const [mousePos, setMousePos] = useState({});
    const [currentTime, setCTime] = useState();

    var softList = [
        ["idProjectFolder", "idProjectSC"],
        ["idExperienceFolder", "idExperienceSC"],
        ["idEducationFolder", "idEducationSC"],
        ["idCertificationsFolder", "idCertificationsSC"],
        ["idVolunteerFolder", "idVolunteerSC"],
        ["idSkillFolder", "idSkillSC"],
        ["idAboutFolder", "idAboutMeSC"]
    ];

    function retId(idname) {
        return document.getElementById(idname);
    }

    useEffect(() => {
        setTimeout(() => {
            const nowDate = new Date();
            const strTime = `${nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours()}:${nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes()}:${nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds()}`
            setCTime(strTime);
            retId("idCurrentTime").innerHTML = strTime;
        }, 1000);
    }, [currentTime]);


    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useEffect(() => {


        softList.forEach((el) => {
            if (retId(el[0])) {
                const projectF = retId(el[0]).getBoundingClientRect();
                var halfShiftPos = 35;
                // console.log(retId("idProjectFolder").clientHeight);
                retId(el[1]).style.top = `${projectF.y + retId(el[0]).clientHeight / 2}px`;
                retId(el[1]).style.left = `${projectF.x + retId(el[0]).clientWidth / 2}px`;
            }

        })

        // console.log(`Top: ${projectF.x} & Y: ${projectF.y}`);
    }, []);

    function handleSoft(pid, idnme, val) {
        // console.log(pid);
        var cc = currCount;
        cc = cc + 1;
        setCuC(cc);
        if (val) {
            retId("idAllSofts").classList.remove("bringFrontD");
            retId(idnme).classList.remove("c1");
            retId(idnme).classList.remove("openCard");
            retId(idnme).style.zIndex = `100`;
            retId(pid).classList.remove("selectedFCard");
            return false;
        }
        else {
            retId("idAllSofts").classList.add("bringFrontD");
            // retId(idnme).classList.add("c1");
            retId(idnme).classList.add("openCard");
            retId(idnme).style.zIndex = `${100 + cc}`;
            retId(pid).classList.add("selectedFCard");

            return true;
        }
    }

    return (
        <>
            <div id="idAllSofts" className="allSoft">
                {/* <div  className="softCard"> */}
                {/* About me */}
                <div id={softList[6][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[6][1]).style.zIndex = `${cc + 100}`;
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow aboutMeWindow">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[6][0], softList[6][1], abtOpen); setAbtOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#ABOUT ME</p>
                            </div>
                            <div className="divf fdirc aboutMeD ">
                                <p>Hey, I am Yash!</p>
                                <p>A Developer from Mumbai.</p>
                                <p>I have a keen interest in Blockchain & Web Development.</p>
                                <p>You can call me a web3 developer {":)"} </p>
                                <p>I like reading books, cooking, playing chess...</p>
                                <div className="divf socialLinks">
                                    {/* <Link to="/"><FontAwesomeIcon icon={faGithub} /></Link> */}
                                    <Link target="_blank" to="https://github.com/itsYashASeeker"><FontAwesomeIcon icon={faGithub} /></Link>
                                    <Link target="_blank" to="https://www.linkedin.com/in/yash-chauhan-180031203/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                    <Link target="_blank" to="https://www.instagram.com/yashck.iso/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                </div>
                            </div>
                        </div>
                    </Draggable>

                </div>
                {/* Projects App */}
                <div id="idProjectSC" className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId("idProjectSC").style.zIndex = `${cc + 100}`;
                    }
                    }
                >
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc cProjects c1 softWindow softProject">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>

                            <div className="divf headerBCard">
                                <p className="mH handle">#PROJECTS</p>
                            </div>

                            <div className="divf allProjects">
                                {projects.map((el) => {
                                    return (
                                        <Link target="_blank" to={el.linkToProject} className="divf fdirc indProject projCard allWCards">
                                            <button className="goToSite"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                            <p className="projectName">{el.name}</p>
                                            <p className="projectDesc">{el.description}</p>
                                        </Link>
                                    )
                                })}
                            </div>

                        </div>
                    </Draggable>
                </div>
                {/* Experience App */}
                <div id="idExperienceSC" className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId("idExperienceSC").style.zIndex = `${cc + 100}`;
                    }
                    }
                >
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft("idExperienceFolder", "idExperienceSC", expOpen); setExOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#WORK EXPERIENCE</p>
                            </div>
                            <div className="divf fdirc allWorks">
                                {experience.map((el) => {
                                    return (
                                        <Link to={el.linkToCompany} target="_blank" className="divf fdirc workCard" style={{ color: "black" }}>
                                            <div className="divf workMainH">
                                                <p className="position-name">{el.jobRole}</p>
                                                <p className="timesWork">{el.timeline}</p>
                                            </div>
                                            <p className="company-name">{el.company}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </Draggable>
                </div>
                {/* Education App */}
                <div id="idEducationSC" className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId("idEducationSC").style.zIndex = `${cc + 100}`;
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft("idEducationFolder", "idEducationSC", edOpen); setEdOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#EDUCATION</p>
                            </div>
                            <div className="divf fdirc allWorks allEds">
                                {education.map((el) => {
                                    return (
                                        <div className="divf fdirc workCard edBox">
                                            <div className="divf workMainH">
                                                <p className="position-name">{el.degree}</p>
                                                <p className="timesWork">{el.timeline}</p>
                                            </div>
                                            <p className="company-name">{el.institute}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Draggable>

                </div>
                {/* Certifications App */}
                <div id={softList[3][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[3][1]).style.zIndex = `${cc + 100}`;
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[3][0], softList[3][1], cerOpen); setCerOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#CERTIFICATIONS</p>
                            </div>
                            <div className="divf fdirc allWorks allEds">
                                {certifications.map((el) => {
                                    return (
                                        <Link target="_blank" to={el.linkToCert} className="divf fdirc workCard edBox certBox">
                                            <div className="divf workMainH">
                                                <p className="position-name">{el.name}</p>
                                            </div>
                                            <p className="company-name">{el.provider}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </Draggable>

                </div>
                {/* Volunteering App*/}
                <div id={softList[4][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[4][1]).style.zIndex = `${cc + 100}`;
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[4][0], softList[4][1], volOpen); setVolOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#VOLUNTEERING</p>
                            </div>
                            <div className="divf fdirc allWorks allEds">
                                {volunteering.map((el) => {
                                    return (
                                        <div className="divf fdirc workCard edBox">
                                            <div className="divf workMainH">
                                                <p className="position-name">{el.role}</p>
                                            </div>
                                            <p className="company-name">{el.org}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Draggable>

                </div>
                {/* Skills App */}
                <div id={softList[5][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[5][1]).style.zIndex = `${cc + 100}`;
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div className="divf fdirc c1 softWindow cSk1">
                            <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[5][0], softList[5][1], skOpen); setSkOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                            <div className="divf headerBCard">
                                <p className="mH handle">#SKILLS</p>
                            </div>
                            <div className="divf skillBoxs">
                                <div className="divf skB"><FontAwesomeIcon icon={faReact} className="fIconS" />React</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faNodeJs} className="fIconS" />Nodejs</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faPython} className="fIconS" />Python</div>
                                <div className="divf skB"><img src={SolLogo} className="fImgS fIconS" />Solidity</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faJs} className="fIconS" />Javascript</div>
                                <div className="divf skB"><img src={NextLogo} className="fImgS fIconS" />Nextjs</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faCode} className="fIconS" />DSA</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faFigma} className="fIconS" />Figma</div>
                                <div className="divf skB"><img src={CanvaLogo} className="fImgS fIconS" />Canva</div>
                                <div className="divf skB"><img src={DjangoRestLogo} className="fImgS fIconS" />Django Rest Framework</div>
                                <div className="divf skB"><img src={MongoLogo} className="fImgS fIconS" />Mongodb</div>
                                <div className="divf skB"><img src={SqlLogo} className="fImgS fIconS" />SQL</div>


                                <div className="divf skB"><FontAwesomeIcon icon={faJava} className="fIconS" />Java</div>

                            </div>
                        </div>
                    </Draggable>

                </div>


                {/* </div> */}
            </div>
            <div className="divf fdirc leftCFolders">
                <div className="divf fullWC">
                    <button id={softList[6][0]} className="divf folderCard myFolder" onClick={() => { const vas = handleSoft(softList[6][0], softList[6][1], abtOpen); setAbtOpen(vas); }}>
                        <img src={MyImage} className="folderI" />
                        <p>About me</p>
                    </button>
                </div>

                <button id="idProjectFolder" className="divf folderCard" onClick={() => { const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Projects</p>
                </button>
                <button id="idExperienceFolder" className="divf  folderCard" onClick={() => { const vas = handleSoft("idExperienceFolder", "idExperienceSC", expOpen); setExOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Experience</p>
                </button>
                <button id="idEducationFolder" className="divf  folderCard" onClick={() => { const vas = handleSoft("idEducationFolder", "idEducationSC", edOpen); setEdOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Education</p>
                </button>
                <button id={softList[3][0]} className="divf  folderCard" onClick={() => { const vas = handleSoft(softList[3][0], softList[3][1], cerOpen); setCerOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Certifications</p>
                </button>
            </div>
            <div className="divf fdirc leftCFolders rightCFolders">
                <button id={softList[4][0]} className="divf  folderCard" onClick={() => { const vas = handleSoft(softList[4][0], softList[4][1], volOpen); setVolOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Volunteering</p>
                </button>
                <button id={softList[5][0]} className="divf  folderCard" onClick={() => { const vas = handleSoft(softList[5][0], softList[5][1], skOpen); setSkOpen(vas); }}>
                    <img src={FolderIcon} className="folderI" />
                    <p className="folderName">Skills</p>
                </button>
                <Link target="_blank" to="https://drive.google.com/file/d/19uWSyr2r4wcbVQa1pVHONiXr_Lj2YIUn/view?usp=sharing" className="divf folderCard">
                    <img src={ResumeIcon} className="folderI" />
                    <p className="folderName">Resume</p>
                </Link>
            </div>
        </>
    )
}