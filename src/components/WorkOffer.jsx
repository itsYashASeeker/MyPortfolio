import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { sendMail } from "../funcs/sendMail";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function WorkOffer(){

    const textBD=`Dear Yash,
I hope this email finds you well. I am reaching out to you regarding an exciting internship opportunity at [company]. We have been impressed by your work and are eager to offer you a chance to join our team and gain valuable experience in the field of [software development]
Best regards,

[name]
[email]
[company]`

    const textSD=`Internship Opportunity at [company]`;

    const textProjSD=`Freelance Development Opportunity: Exciting Project Collaboration`

    const textProjBD=`Dear Yash,

I hope this email finds you well. I'm reaching out to discuss a potential freelance development project that I believe aligns perfectly with your expertise and skills.
    
We have a project in mind that requires a developer of your caliber, and we are impressed by your portfolio and experience in [specific programming languages or technologies relevant to the project]. We believe your creativity and technical proficiency would be invaluable in bringing this project to life.
Best regards,

[name]
[email]
[company]`

    const [bodyData, setBodyData] = useState(textBD);
    const [subjData, setSubjData]=useState(textSD);

    const [part1D, setpart1D] = useState(false);

    const [mailLoad, setMailload]=useState(0);

    const [sname, setSname]=useState("");
    const [semail, setSemail]=useState("");
    const [scomp, setScomp]=useState("");

    function retId(idname) {
        return document.getElementById(idname);
    }

    const [offerOption, setOfferOption]=useState(1);

    // console.log(import.meta.env.VITE_MAIL_PASS);

    function replaceImp(subD, bodD){
        // textBD.replace(`[]`)
        var compName=scomp;
        var sendEmail=semail;
        var sendName=sname;
        if(!compName || !sendEmail || !sendName){
            return;
        }
        // console.log(compName);
        var ttsd=subD;
        var ttbd=bodD;
        ttsd=ttsd.replace(`[company]`, compName);
        ttsd=ttsd.replace(`[company]`, compName);
        ttbd=ttbd.replace(`[company]`, compName);
        ttbd=ttbd.replace(`[company]`, compName);
        ttbd=ttbd.replace(`[email]`, sendEmail);
        ttbd=ttbd.replace(`[name]`, sendName);
        setSubjData(ttsd);
        setBodyData(ttbd);
        // console.log(ttsd);
        // console.log(ttbd);
    }

    useEffect(()=>{
        
        if(!sname || !semail || !scomp){
            setpart1D(false);
        }
    }, [sname, semail, scomp])

    function genEmailD(){
        if(sname && semail && scomp){
            setpart1D(true);
            replaceImp(subjData, bodyData);
        }
        else{
            window.alert("Please fill all fields");
        }
    }

    useEffect(()=>{
        var op=offerOption;
        if(retId(`idoffer${op}`))
        retId(`idoffer${op}`).classList.add("activebt");
        if(sname && semail && scomp){
            // setpart1D(true);
            replaceImp(subjData, bodyData);
        }
        if(op==1){
            replaceImp(textSD,textBD);
            op=2;
        }
        else{
            replaceImp(textProjSD,textProjBD);
            op=1;
        }
        if(retId(`idoffer${op}`))
        retId(`idoffer${op}`).classList.remove("activebt");
    }, [offerOption])

    const sendMail = async (subject, body, senderEmail) => {
        const offOption = offerOption==1 ? "Internship":"Freelancing Projects"; 
        var dets = {
            name: sname,
            email: semail,
            company: scomp
        }
        body=`${body}\n\nDetails of the sender: \nName: ${dets.name}\nEmail: ${dets.email}\nCompany Name: ${dets.company}\nOffer option: ${offOption}`;
        setMailload(10);
        try {
          await axios
            .post(`${import.meta.env.VITE_APP_BACKEND_MAIL}/y/u/send`, {
              subjectE: subject,
              bodyE: body,
              sendEmail: senderEmail,
            })
            .then((res) => {
            //   console.log(res.data);
            setMailload(true);
            })
            .catch((err) => {
            //   console.log();
            if(err.response.data.error[0] && err.response.data.error[0].startsWith("You have provided") ){
                // setMailload(err.response.data.error[0]);
                setMailload(8);
            }
            else{
                setMailload(9);
            }
            
            });
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <>
        <div className="divf fdirc workOfBg">
            <div className="divf fdirc">
            <div className="workD1">
                <div className="divf workD11">
                    <p>Freelancing Projects?</p>
                    <p>Internships?</p>
                    <p>Part-time work?</p>
                </div>
                <p className="workD12">Yes I am open for that!</p>
            </div>
            <div className="wdivider"></div>
            <div className="draftEm">
                <div className="divf deTitle">
                    <p>Write an Email for: </p>
                    <button id="idoffer1" onClick={()=>{setOfferOption(1)}}>Internship</button>
                    <button id="idoffer2" onClick={()=>{setOfferOption(2)}}>Freelancing Project</button>
                </div>

                <div className="deMain fullWidth">
                    <div className="divf fdirc fullWidth deSendInsD">
                        <div className="divf fullWidth" style={{gap: "0.5rem"}}>
                            <input type="text" className="deSendD" placeholder="Your name?" value={sname}
                            onChange={(e)=>{setSname(sname=>e.target.value)}}
                            />
                            <input type="email" className="deSendD" placeholder="Your email id?" value={semail}
                            onChange={(e)=>{setSemail(semail=>e.target.value)}} />
                        </div>
                        <input type="text" className="deSendD" placeholder="Your company name?" value={scomp}
                            onChange={(e)=>{setScomp(scomp=>e.target.value)}} />
                    </div>
                    <div className="divf fdirc demainC fullWidth">
                        <div className="divf inDemainC fullWidth">
                            <p className="inDemainTitle">Subject:</p>
                            {part1D?
                            <>
                            <textarea rows="1" type="text" className="inDemainCont fullWidth" value={subjData}
                            onChange={(e)=>{setSubjData(e.target.value)}}
                            />
                            <span className="editableIcon"><FontAwesomeIcon icon={faEdit} /></span>
                            </>

                            : <button className="genData"
                            onClick={()=>{genEmailD()}}
                            >Generate Subject</button>
                            }
                        </div>
                        <div className="divf inDemainC fullWidth">
                            <p className="inDemainTitle">Body:</p>
                            {part1D?
                            <>
                            <textarea rows="5" type="text" className="inDemainCont fullWidth" value={bodyData}
                            onChange={(e)=>{setBodyData(e.target.value)}}
                            />
                            <span className="editableIcon"><FontAwesomeIcon icon={faEdit} /></span>
                            </>
                            : <button className="genData"
                            onClick={()=>{genEmailD()}}
                            >Generate Body</button>
                            }
                        </div>
                    </div>
                    
                    <div 
                    
                    className="divf divSend">
                        {mailLoad==0 || mailLoad==9 || mailLoad==true ? 
                        <button
                        disabled={part1D?false:true}
                        onClick={()=>{sendMail(subjData, bodyData, semail)}}
                        >Send</button>
                        : <CircularProgress />
                }
                    </div>
                </div>
            </div>
            </div>
            
           

        </div>
        {mailLoad==true ? 
        <div className="divf notifY">
        <div className="notContent">
            <p className="notiP1" >Thank you for sending the mail!</p>
            <p className="notiP2">I will soon read it and reach out to you!</p>
            <button className="notBt notBtSuccess" onClick={()=>{setMailload(0)
            setBodyData(textBD);
            setSubjData(textSD);
            setpart1D(false);
            setSname("");
            setSemail("");
            setScomp("");
            setOfferOption(1);
            }}>OK</button>
        </div>
    </div>
    :
    <></>
    }
    {mailLoad==9 || mailLoad==8 ? 
        <div className="divf notifY">
        <div className="notContent">
            <p className="notiP1 notiP1E" >{mailLoad==9? "Some error occurred": "The email address was not correct!"}</p>
            <p className="notiP2">{mailLoad==9? "Please try again later": "Please enter a valid email address!"}</p>
            <button className="notBt" onClick={()=>{
                setMailload(0)
            // setBodyData(textBD);
            // setSubjData(textSD);
            // setpart1D(false);
            // setSname("");
            // setSemail("");
            // setScomp("");
            // setOfferOption(1);
            }}>OK</button>
        </div>
    </div>
    :
    <></>
    }
        
        </>
    )
}