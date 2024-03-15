import "../src/css/anim.css";
import "../src/css/index.css";
import "../src/css/bg1.css";
import "../src/css/index2.css";

import "../src/css/workO.css";
import "../src/css/whyme.css";
import "../src/css/transit.css";

import "../src/css/media.css";

import DiamondImg from "../src/assets/diamond/Dimond_alt_duotone.svg";
import EmailImg from "../src/assets/email.svg";
import LearnImg from "../src/assets/learn_coding.svg";
import ConnectImg from "../src/assets/connect.svg";

// import MyImage from "./assets/Yash Kamlesh Chauhan 2.png";

import MainContent from "./components/mainContent";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import WorkOffer from "./components/WorkOffer";
import WhyMe from "./components/WhyMe";
// import { useRouter } from "next/router";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Tooltip, tooltipClasses } from "@mui/material";
// import { Tooltip } from "@mui/material";

// const BootstrapTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} arrow classes={{ popper: className }} />
//   ))(({ theme }) => ({
//     [`& .${tooltipClasses.arrow}`]: {
//       color: theme.palette.common.black,
//     },
//     [`& .${tooltipClasses.tooltip}`]: {
//       backgroundColor: theme.palette.common.black,
//     },
//   }));


export default function SecP() {

    function retId(idname) {
        return document.getElementById(idname);
    }

    const [currApp, setCurrApp] = useState(0);

    function delayTime(millisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, millisec);
        })
    }

    useEffect(() => {
        const dapp = currApp;
        if (dapp == 0) {
            for (var i = 1; i < 5; i++) {
                if (retId(`idTaskBt${i}`)) {
                    retId(`idTaskBt${i}`).disabled = false;
                    retId(`taskOutB${i}`).classList.add("tasksApp");
                    retId(`idTaskBt${i}`).classList.remove("activetaskBt");
                }
            }
            return;
        }
        retId(`idTaskBt${dapp}`).disabled = true;
        retId(`taskOutB${dapp}`).classList.remove("tasksApp");
        retId(`idTaskBt${dapp}`).classList.add("activetaskBt");
    }, [currApp]);

    async function setDefaultAppPos() {
        const dApp = currApp;

        if (dApp == 0) {
            return;
        }
        // else if(dApp==1){

        // }
        else if (dApp == 2) {
            // window.alert(dApp);
            retId("idWorkOffer").classList.add("goLeft");
            await delayTime(200);
            retId("idMainContent").classList.remove("goRight");
        }
        else if (dApp == 3) {

            // delayTime(100);
            retId("idWhyMe").classList.add("goRight");
            await delayTime(200);
            retId("idMainContent").classList.remove("goLeft");
        }
        retId(`idTaskBt${dApp}`).disabled = false;
        retId(`taskOutB${dApp}`).classList.add("tasksApp");
        retId(`idTaskBt${dApp}`).classList.remove("activetaskBt");
        // await delayTime(300);
    }

    // retId("idExperienceFolder")

    // const router = useRouter();
    const navigate = useNavigate();


    return (<>
        <div className="divf fdirc fullbg1">
            <div id="idMainContent" className="divf mainContent">
                <MainContent />
            </div>
            <div id="idLetsConnect" className="divf notifY dNone">
                <div className="notContent">
                    <p className="" style={{ width: "100%", marginBottom: "1rem" }} >/in/yash-chauhan-180031203/</p>
                    <Link className="notBt notBtSuccess fullWidth" style={{ width: "100%", marginTop: "1rem" }}
                        onClick={() => {
                            retId("idLetsConnect").classList.add("dNone");
                            // setCurrApp(0);
                        }}
                        to="https://www.linkedin.com/in/yash-chauhan-180031203/"
                        target="_blank"
                    >Lets Connect on Linkedin</Link>
                </div>
            </div>
            <div id="idWorkOffer" className="divf fullWorkOffer allBigApps goLeft">
                <button className="backToHome"
                    onClick={() => {
                        setCurrApp(0);
                        retId("idMainContent").classList.remove("goRight");
                        retId("idWorkOffer").classList.add("goLeft");
                    }}
                >Back to Home <FontAwesomeIcon icon={faArrowRight} /></button>
                <WorkOffer />
            </div>
            <div id="idWhyMe" className="divf fullWhyMebg allBigApps goRight">
                <button className="backLeftPlace backToHome"
                    onClick={() => {
                        setCurrApp(0);
                        retId("idMainContent").classList.remove("goLeft");
                        retId("idWhyMe").classList.add("goRight");

                    }}
                ><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</button>
                <WhyMe />
            </div>
            <div id="idLetsLearn" className="divf notifY dNone">
                <div className="notContent">
                    <p className="notiP1" >Coming soon</p>
                    <button className="notBt notBtSuccess"
                        onClick={() => {
                            retId("idLetsLearn").classList.add("dNone");
                            // setCurrApp(0);
                        }}
                    >OK</button>
                </div>
            </div>
            {/* <div className="" */}
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
            <div className="divf footerPC">
                <div className="divf fdirc mypcDiv">
                    <p className="mypc">My Personal Computer</p>
                    <p className="myname">Yash Kamlesh Chauhan</p>
                </div>
                <div className="divf taskButs">
                    {/* <button className="taskB1">Connect with me!<span></span></button>
                    <button className="taskB1">I have some work for you!<span></span></button> */}
                    {/* <BootstrapTooltip title="Connect with me!"> */}
                    <div id="taskOutB1" className="tasksApp">
                        <button className="divf ttb1 taskB1"
                            id="idTaskBt1"
                            onClick={async () => {
                                // setCurrApp(4);
                                retId("idLetsConnect").classList.remove("dNone");
                                return;
                                // await setDefaultAppPos()
                            }}
                        ><img className="footTaskIcon" src={ConnectImg} /><span></span></button>
                        <div className="ttoolTip">Connect with me!</div>
                    </div>
                    <div id="taskOutB2" className="tasksApp">
                        <button className="divf ttb1 taskB1"
                            id="idTaskBt2"
                            onClick={async () => {
                                await setDefaultAppPos()
                                setCurrApp(2);
                                // delayTime(1000);
                                retId("idMainContent").classList.add("goRight");

                                retId("idWorkOffer").classList.remove("goLeft");

                                // retId("idTaskBtWorkOffer")
                            }}
                        ><img className="footTaskIcon" src={EmailImg} /><span></span></button>
                        <div className="ttoolTip">Open to Work</div>
                    </div>
                    <div id="taskOutB3" className="tasksApp">
                        <button className="divf ttb1 taskB1"
                            id="idTaskBt3"
                            onClick={async () => {
                                await setDefaultAppPos()
                                // delayTime(1000);
                                setCurrApp(3);
                                retId("idMainContent").classList.add("goLeft");

                                retId("idWhyMe").classList.remove("goRight");

                                // retId("idTaskBtWorkOffer")
                            }}
                        ><img className="footTaskIcon" src={DiamondImg} /><span></span></button>
                        <div className="ttoolTip">Why me?</div>
                    </div>
                    <div id="taskOutB4" className="tasksApp">
                        <button
                            id="idTaskBt4"
                            className="divf ttb1 taskB1"
                            onClick={async () => {
                                // setCurrApp(4);
                                retId("idLetsLearn").classList.remove("dNone");
                                return;
                                // await setDefaultAppPos()
                            }}
                        ><img className="footTaskIcon" src={LearnImg} /><span></span></button>
                        <div className="ttoolTip">Let's learn together!</div>
                    </div>
                    {/* </BootstrapTooltip> */}





                    {/* <button className="taskB1">Let's learn together<span></span></button> */}

                </div>
                <div id="idCurrentTime" className="currTime">14:48:11</div>
            </div>
        </div>

    </>)

}