import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import data from "../data";
import Project from "../components/Project";
import { logDOM } from "@testing-library/react";

function Home(){

    const el = React.useRef(null);
    const [homep, setHomep] = useState(1);
    const [scrollTop, setScrollTop] = useState(0);
    const [prevST, setPrevST] = useState(0);
    const [winHeight, setWinHeight] = useState(0);
    const [maxScroll, setMaxScroll] = useState(Math.round(winHeight)/2); 
    const [loaded, setLoaded] = useState(0);

    function delay(time){
        return new Promise(resolve=>setTimeout(resolve,time));
    }

    function changeThemeFunc(){
        var currentTheme2 = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";

        if (currentTheme2 === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme);  
    }

    async function startB(){
        
        var colorBurstid = document.getElementById("colorBurstid");
        var startBurstId = document.getElementById("startBurstId");
        colorBurstid.classList.remove("dNone");
        startBurstId.classList.remove("dNone");

        // Burst starts
        await delay(600);
        colorBurstid.classList.add("doBurst");
        await delay(500);
        startBurstId.classList.add("dNone");
        colorBurstid.classList.add("dNone");
        colorBurstid.classList.remove("doBurst");
        // Burst ends

        setHomep(0);
        // Extend page
        var r = document.querySelector(':root');
        r.style.setProperty('--min-height', "600vh");

        // Set theme to white
        document.documentElement.setAttribute('data-theme', "light");

        // Add animation for title 2
        document.getElementById("title2id").classList.add("goUp");
        
        // Animation For main content
        document.getElementById("headerdivid").classList.add("goUp");
        
        
        document.getElementById("revealContentid").classList.remove("dNone");
        await delay(1000);
        document.getElementById("mainContentid").classList.add("goUp");
        

    }

    useEffect(()=>{
        
        // setMaxScroll(Math.round(scrollTop/2));
        async function updateOnScroll(){
            setPrevST(scrollTop);
            setScrollTop(window.scrollY);
            setWinHeight(window.innerHeight);

            document.getElementById("mainContentid").classList.remove("goUp");
            document.getElementById("headerdivid").classList.remove("goUp");
            document.getElementById("headerdivid2").classList.remove("goUp");
            document.getElementById("headerdivid3").classList.remove("goUp");
            document.getElementById("headerdivid4").classList.remove("goUp");
            document.getElementById("headerdivid5").classList.remove("goUp");

            if(scrollTop<=winHeight){
                if(prevST>winHeight){
                    document.getElementById("headerdivid").classList.add("goUp");
                    document.getElementById("mainContentid").classList.add("goUp");
                }
                else{
                    document.getElementById("headerdivid").classList.remove("dNone");
                    document.getElementById("headerdivid").classList.add("goUp");
                    document.getElementById("mainContentid").classList.add("goUp");
                }
            }
            else if(scrollTop<winHeight*2){
                // document.getElementById("headerdivid2").classList.remove("dNone");
                document.getElementById("headerdivid2").classList.add("goUp");
            }
            else if(scrollTop<winHeight*3){
                // document.getElementById("headerdivid3").classList.remove("dNone");
                document.getElementById("headerdivid3").classList.add("goUp");
            }
            else if(scrollTop<winHeight*4){
                // document.getElementById("headerdivid4").classList.remove("dNone");
                document.getElementById("headerdivid4").classList.add("goUp");
            }
            else{
                // document.getElementById("headerdivid5").classList.remove("dNone");
                document.getElementById("headerdivid5").classList.add("goUp");
            }
        }
        if(homep===0){
            window.addEventListener("scroll", updateOnScroll);
            document.getElementById("title2id").classList.remove("dNone");
            return ()=>{
                window.removeEventListener("scroll", updateOnScroll);
            }
        }   
        else{
            document.getElementById("headerdivid").classList.add("goUp");
            document.getElementById("title2id").classList.add("dNone");
        }
        
    });

    useEffect(()=>{
        var currentTheme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light");
        if(currentTheme){
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
        const handleScroll = (event)=>{
            
        }
        window.addEventListener("scroll", handleScroll);

        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["To the beautiful stars and brilliant brains of this world...", "Hello, I am Yash!"],
            typeSpeed: 50,
        });

        return async() => {
            typed.destroy();
            await delay(7000);
            if(homep===1){
                document.getElementById("startBurstId").classList.remove("dNone");
            }
                
        };

    }, []);

    return(
        <>
            <div className="bodybg">
            {/* <iframe src="https://www.youtube.com/embed/667fRIiV2ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                {(homep===0)?
                    <>
                        <div id="contactmeid" className="contactme">
                            <button><i className="fa-brands fa-github"></i></button>
                            <button><i className="fa-brands fa-instagram"></i></button>
                            <button><i className="fa-brands fa-linkedin-in"></i></button>
                        </div>
                        <div id="changeThemeId" className="changeThemediv">
                            <button className="changeTheme" onClick={changeThemeFunc}><span></span></button>
                        </div>
                    </> : <></>
                }
                <div id="headerdivid" className="headerdiv revGoUp">
                    <div className="tit">
                        <p className="title1"><span ref={el} /></p>
                        <p id="title2id" className="title2">Here's the description about this tiny little dust!</p>
                    </div>
                </div>
                {/* {data.map(el=>{
                    setLoaded(1);
                    <Project props={el}></Project>
                })} */}
                <div id="headerdivid2" className="headerdiv revGoUp">
                    <div className="tit">
                        <p id="title2id2" className="title2">A React website for buying web3 mobile number</p>
                        <Link target={"_blank"} to={"https://itsyashaseeker.github.io/Ultimate-digits/"} className="linktopro">https://itsyashaseeker.github.io/Ultimate-digits/</Link>
                        <div id="videos2id" className="videos">
                            <video controls autoPlay width={"80vw"} height={"50vh"}>
                                <source src="/Ultimate-digits(sr).mp4" type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div> 
                <div id="headerdivid3" className="headerdiv revGoUp">
                    <p id="title2id3" className="title2 tit">A To-do lists web app!</p>
                    <Link target={"_blank"} to={"https://todolists-pora.onrender.com/"} className="linktopro">https://todolists-pora.onrender.com/</Link>
                    <div id="videos2id" className="videos">
                        <video controls autoPlay width={"80vw"} height={"50vh"}>
                            <source src="/To-do lists(sr).mp4" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div id="headerdivid4" className="headerdiv revGoUp">
                    <p id="title2id4" className="title2 tit">A Snake game in Python!</p>
                    <Link target={"_blank"} to={"https://github.com/itsYashASeeker/Snake-Game"} className="linktopro">https://github.com/itsYashASeeker/Snake-Game</Link>
                    <div id="videos2id" className="videos">
                        <video controls autoPlay width={"80vw"} height={"50vh"}>
                            <source src="/Snake Game(sr).mp4" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div id="headerdivid5" className="headerdiv revGoUp">
                    <p id="title2id5" className="title2 tit">A Password manager GUI in Python!</p>
                    <Link target={"_blank"} to={"https://github.com/itsYashASeeker/Password-manager"} className="linktopro">https://github.com/itsYashASeeker/Password-manager</Link>
                    <div id="videos2id" className="videos">
                        <video controls autoPlay width={"80vw"} height={"50vh"}>
                            <source src="/Password manager(sr).mp4" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div id="colorBurstid" className="colorBurst"></div>
                {/* {(homep===1)?  */}
                    <button id="startBurstId" className="startBurst dNone" onClick={startB}>Start</button>
                        {/* : <></> */}
                {/* } */}
                {/* {(homep===0 && scrollTop<=winHeight)? */}
                    <div id="mainContentid" className="mainContent revGoUp">
                        <span id="revealContentid" className="revealContent dNone"></span>
                        <div id="showContentid" className="showContent">
                            <p>A hustler, learning and improving on his coding skills</p>
                            <p>My hobbies are Chess, Cricket, Reading Books...</p>
                            <p>Scroll to view my projects!</p>
                        </div>
                    </div>
                {/* } */}
            </div>
        </>
    )
}

export default Home;

