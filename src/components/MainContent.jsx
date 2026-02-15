import { faFigma, faGithub, faInstagram, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import CanvaLogo from "../../src/assets/canva.png";
import DjangoRestLogo from "../../src/assets/django-rest.png";
import MongoLogo from "../../src/assets/mongo2.png";
import NextLogo from "../../src/assets/nextjs.png";
import SolLogo from "../../src/assets/sol.png";
import SqlLogo from "../../src/assets/sql.png";
import FolderIcon from "../assets/folder.png";
import ResumeIcon from "../assets/resumeIcon.jpg";
import "../css/anim.css";
import "../css/bg1.css";
import "../css/index.css";
import "../css/index2.css";
import "../css/media.css";
import "../css/notify.css";
// import MyImage from "./assets/Yash Kamlesh Chauhan 2.png";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import MyImage from "../assets/yash1.png";
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

    const [currAppId, setCurrAppId] = useState();

    const [appPos, setAppPos] = useState();
    const [sAppPos, setSAppPos] = useState();

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const navigate = useNavigate();


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
        const handleResize = () => {
            setWindowSize({
                ...windowSize,
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function posAllWindowsReset() {
        const ws = { ...windowSize };
        softList.forEach((el) => {
            if (retId(el[0])) {
                const projectF = retId(el[0]).getBoundingClientRect();
                if (projectF.x > ws.width) {
                    projectF.x = -1 * (ws.width - projectF.x);
                }
                else if ((projectF.x * -1) > ws.width) {
                    projectF.x = ws.width + projectF.x;
                }
                retId(el[1]).style.top = `${projectF.y + retId(el[0]).clientHeight / 2}px`;
                retId(el[1]).style.left = `${projectF.x + retId(el[0]).clientWidth / 2}px`;

            }

        })
    }

    useEffect(() => {
        posAllWindowsReset();
    }, [windowSize, window.innerWidth, window.innerHeight]);

    // useEffect(() => {
    //     // console.log(appPos);
    //     var lsAppPos = localStorage.getItem("appPos");
    //     if (lsAppPos && (!sAppPos || !sAppPos['1'])) {
    //         lsAppPos = JSON.parse(lsAppPos);
    //         // console.log(lsAppPos);
    //         setSAppPos({ ...lsAppPos });
    //         retId('idDrag1App').style.transform = lsAppPos['1'];
    //     }
    //     if (appPos) {
    //         localStorage.setItem("appPos", JSON.stringify(appPos));
    //     }

    // }, [appPos]);

    // useEffect(() => {
    //     console.log(sAppPos);
    // }, [sAppPos])

    function highApp(currId) {
        const currAppIDDum = currAppId;
        if (currAppIDDum && retId(currAppIDDum + "proj")) {
            retId(currAppIDDum + "proj").classList.remove("selectedAppBorder");

        }
        retId(currId + "proj").classList.add("selectedAppBorder");
        setCurrAppId(currId);
    }

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
            // highApp(idnme);
            return false;
        }
        else {
            retId("idAllSofts").classList.add("bringFrontD");
            // retId(idnme).classList.add("c1");
            retId(idnme).classList.add("openCard");
            retId(idnme).style.zIndex = `${100 + cc}`;
            highApp(idnme);
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
                        highApp(softList[6][1])
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div id={softList[6][1] + "proj"} className="divf fdirc c1 softWindow aboutMeWindow">
                                <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[6][0], softList[6][1], abtOpen); setAbtOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                                <div className="divf headerBCard">
                                    <p className="mH handle">#ABOUT ME</p>
                                </div>
                                <div className="divf fdirc aboutMeD ">
                                    <p>A passionate Software Developer, sometimes experimenting with hardwares and low-level integrations.</p>
                                    <p>Experienced in building Mobile Apps in React Native, efficient backend systems in Node, Django, Springboot.</p>
                                    <p>Filled with passion for Machine learning, blockchain.</p>
                                    <div className="divf socialLinks">
                                        {/* <Link to="/"><FontAwesomeIcon icon={faGithub} /></Link> */}
                                        <Link target="_blank" to="https://github.com/itsYashASeeker"><FontAwesomeIcon icon={faGithub} /></Link>
                                        <Link target="_blank" to="https://www.linkedin.com/in/yash-chauhan-180031203/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                        <Link target="_blank" to="https://www.instagram.com/yashck.iso/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>

                </div>
                {/* Projects App */}
                <div id={softList[0][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[0][1]).style.zIndex = `${cc + 100}`;
                        highApp(softList[0][1]);
                    }
                    }
                >
                    <Draggable
                        handle=".handle"
                    // onDrag={() => { console.log("hello"); }}
                    >
                        <div
                        // onDrag={() => { console.log("hello"); }}
                        >
                            <div
                                id={softList[0][1] + "proj"}

                                className="divf fdirc cProjects c1 softWindow softProject">
                                <button className="closeSoft" onClick={() => { const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>

                                <div className="divf headerBCard">
                                    <p className="mH handle"

                                    >#PROJECTS</p>
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
                        </div>
                    </Draggable>
                </div>
                {/* Experience App */}
                <div id={softList[1][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[1][1]).style.zIndex = `${cc + 100}`;
                        highApp(softList[1][1]);
                    }
                    }
                >
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div id={softList[1][1] + "proj"} className="divf fdirc c1 softWindow">
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
                        </div>
                    </Draggable>
                </div>
                {/* Education App */}
                <div id={softList[2][1]} className="divf fdirc softCard"
                    onClick={() => {
                        var cc = currCount;
                        cc = cc + 1;
                        setCuC(cc);
                        retId(softList[2][1]).style.zIndex = `${cc + 100}`;
                        highApp(softList[2][1])
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div id={softList[2][1] + "proj"} className="divf fdirc c1 softWindow">
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
                        highApp(softList[3][1]);
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div
                                id={softList[3][1] + "proj"}
                                className="divf fdirc c1 softWindow">
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
                        highApp(softList[4][1]);
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div
                                id={softList[4][1] + "proj"}
                                className="divf fdirc c1 softWindow">
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
                        highApp(softList[5][1]);
                    }
                    }>
                    <Draggable
                        handle=".handle"
                    >
                        <div>
                            <div
                                id={softList[5][1] + "proj"}
                                className="divf fdirc c1 softWindow cSk1">
                                <button className="closeSoft" onClick={() => { const vas = handleSoft(softList[5][0], softList[5][1], skOpen); setSkOpen(vas); }}><FontAwesomeIcon icon={faXmark} /></button>
                                <div className="divf headerBCard">
                                    <p className="mH handle">#SKILLS</p>
                                </div>
                                <div className="divf skillBoxs">
                                    <div className="divf skB"><FontAwesomeIcon icon={faJava} className="fIconS" />Java</div>
                                    <div className="divf skB"><FontAwesomeIcon icon={faReact} className="fIconS" />React</div>
                                    <div className="divf skB"><FontAwesomeIcon icon={faNodeJs} className="fIconS" />Nodejs</div>
                                    <div className="divf skB"><FontAwesomeIcon icon={faPython} className="fIconS" />Python</div>
                                    <div className="divf skB"><img src={SolLogo} className="fImgS fIconS" />Solidity</div>
                                    <div className="divf skB"><img src={NextLogo} className="fImgS fIconS" />Nextjs</div>
                                    <div className="divf skB"><FontAwesomeIcon icon={faJs} className="fIconS" />Javascript</div>
                                    <div className="divf skB"><FontAwesomeIcon icon={faCode} className="fIconS" />DSA</div>
                                    <div className="divf skB"><img src={DjangoRestLogo} className="fImgS fIconS" />Django Rest Framework</div>
                                    <div className="divf skB"><img src={SqlLogo} className="fImgS fIconS" />SQL</div>
                                    <div className="divf skB"><img src={MongoLogo} className="fImgS fIconS" />Mongodb</div>
                                </div>
                            </div>
                        </div>
                    </Draggable>

                </div>


                {/* </div> */}
            </div>
            <div className="divf fdirc leftCFolders"
                style={{ position: "relative" }}
            >
                <Draggable
                    handle={`#${softList[6][0]}`}
                    // handle={"#idDrag1App"}
                    onDrag={() => { posAllWindowsReset(); }}
                    onStop={(e) => { setAppPos({ ...appPos, 1: retId("idDrag1App").style.transform }) }}
                // disabled={windowSize && windowSize.width < 1000}

                // defaultPosition={sAppPos && sAppPos['1'] ? { x: sAppPos['1'] }}
                >
                    {/* <div> */}
                    <div id="idDrag1App" className="fullWC react-draggable-dragged react-draggable react-draggable-dragged"
                    // style={sAppPos && sAppPos["1"] ? {
                    //     transform: sAppPos["1"]
                    // } : {}}
                    >
                        <button id={softList[6][0]} className="divf fdirc folderCard myFolder" onClick={() => { const vas = handleSoft(softList[6][0], softList[6][1], abtOpen); setAbtOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft(softList[6][0], softList[6][1], abtOpen); setAbtOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={MyImage} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p>About me</p>
                        </button>
                    </div>
                    {/* </div> */}
                </Draggable >
                <Draggable
                    handle={`#idProjectFolder`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id="idProjectFolder" className="divf fdirc folderCard" onClick={() => { const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft("idProjectFolder", "idProjectSC", pOpen); setPOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Projects</p>
                        </button>
                    </div>
                </Draggable>
                <Draggable
                    handle={`#idExperienceFolder`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id="idExperienceFolder" className="divf fdirc folderCard" onClick={() => { const vas = handleSoft("idExperienceFolder", "idExperienceSC", expOpen); setExOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft("idExperienceFolder", "idExperienceSC", expOpen); setExOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Experience</p>
                        </button>
                    </div>
                </Draggable>
                <Draggable
                    handle={`#idEducationFolder`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id="idEducationFolder" className="divf fdirc folderCard" onClick={() => { const vas = handleSoft("idEducationFolder", "idEducationSC", edOpen); setEdOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft("idEducationFolder", "idEducationSC", edOpen); setEdOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Education</p>
                        </button>
                    </div></Draggable>
                <Draggable
                    handle={`#${softList[3][0]}`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id={softList[3][0]} className="divf fdirc folderCard" onClick={() => { const vas = handleSoft(softList[3][0], softList[3][1], cerOpen); setCerOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft(softList[3][0], softList[3][1], cerOpen); setCerOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Certifications</p>
                        </button>
                    </div>
                </Draggable>

            </div >
            <div className="divf fdirc leftCFolders rightCFolders">
                <Draggable
                    handle={`#${softList[4][0]}`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id={softList[4][0]} className="divf fdirc folderCard" onClick={() => { const vas = handleSoft(softList[4][0], softList[4][1], volOpen); setVolOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft(softList[4][0], softList[4][1], volOpen); setVolOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Volunteering</p>
                        </button>
                    </div>
                </Draggable>
                <Draggable
                    handle={`#${softList[5][0]}`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <button id={softList[5][0]} className="divf fdirc folderCard" onClick={() => { const vas = handleSoft(softList[5][0], softList[5][1], skOpen); setSkOpen(vas); }}
                            onTouchEnd={(e) => { e.preventDefault(); const vas = handleSoft(softList[5][0], softList[5][1], skOpen); setSkOpen(vas); }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={FolderIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Skills</p>
                        </button>
                    </div>
                </Draggable>

                <Draggable
                    handle={`#idResumeLinkFolder`}
                    onDrag={() => { posAllWindowsReset() }}
                >
                    <div className="fullWC">
                        <Link id="idResumeLinkFolder" target="_blank" to="https://drive.google.com/file/d/19uWSyr2r4wcbVQa1pVHONiXr_Lj2YIUn/view?usp=sharing"
                            draggable="false"
                            className="divf fdirc folderCard"
                            onTouchEnd={(e) => { e.preventDefault(); retId("idResumeLinkFolder").click() }}
                        >
                            <div className="divf" style={{ flexGrow: 1 }}>
                                <img src={ResumeIcon} className="folderI" loading="lazy" draggable="false" />
                            </div>

                            <p className="folderName">Resume</p>
                        </Link>
                    </div>
                </Draggable>
            </div>
        </>
    )
}