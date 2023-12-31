import { faFigma, faGithub, faInstagram, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MongoLogo from "../src/assets/mongo2.png";
import SqlLogo from "../src/assets/sql.png";
import SolLogo from "../src/assets/sol.png";
import DjangoRestLogo from "../src/assets/django-rest.png";
import { faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import "../src/anim.css";
import '../src/index.css';

export default function Home() {
    return (
        <>
            <div className="fullbg">
                <div className="fullAnim">
                    <div className="anim a1"></div>
                    <div className="anim a2"></div>
                    <div className="anim a3"></div>
                </div>
                <div className="divf fdirc headerP">
                    <p className="mainName">Yash Kamlesh Chauhan</p>
                    <div className="divf socLinks">
                        {/* <Link to="/"><FontAwesomeIcon icon={faGithub} /></Link> */}
                        <Link to="/"><FontAwesomeIcon icon={faGithub} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                </div>
                <div className="divf mainC">
                    <div className="divf fdirc vBars">
                        <div className="divf fdirc c1 cSkills">
                            <p className="mH">#SKILLS</p>
                            <div className="divf skillBoxs">
                                <div className="divf skB"><FontAwesomeIcon icon={faReact} className="fIconS" />React</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faNodeJs} className="fIconS" />Nodejs</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faPython} className="fIconS" />Python</div>
                                <div className="divf skB"><img src={SolLogo} className="fImgS fIconS" />Solidity</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faJs} className="fIconS" />Javascript</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faCode} className="fIconS" />DSA</div>
                                <div className="divf skB"><FontAwesomeIcon icon={faFigma} className="fIconS" />Figma</div>
                                <div className="divf skB"><img src={DjangoRestLogo} className="fImgS fIconS" />Django Rest Framework</div>
                                <div className="divf skB"><img src={MongoLogo} className="fImgS fIconS" />Mongodb</div>
                                <div className="divf skB"><img src={SqlLogo} className="fImgS fIconS" />SQL</div>


                                <div className="divf skB"><FontAwesomeIcon icon={faJava} className="fIconS" />Java</div>

                            </div>
                        </div>
                        <div className="divf fdirc c1 cSkills">
                            <p className="mH">#EDUCATION</p>
                            <div className="divf fdirc allWorks allEds">
                                <div className="divf fdirc workCard edBox">
                                    <div className="divf workMainH">
                                        <p className="position-name">B.Tech Computer Science</p>
                                        <p className="timesWork">Dec,2021 - Ongoing</p>
                                    </div>
                                    <p className="company-name">KJ Somaiya Institute of Technology</p>
                                </div>

                                <div className="divf fdirc workCard edBox">
                                    <div className="divf workMainH">
                                        <p className="position-name">12th Science</p>
                                        <p className="timesWork">Completed Aug,2021</p>
                                    </div>
                                    <p className="company-name">KJ Somaiya Junior College of Science and Commerce</p>
                                </div>
                                <div className="divf fdirc workCard edBox">
                                    <div className="divf workMainH">
                                        <p className="position-name">10th</p>
                                        <p className="timesWork">Completed Mar,2019</p>
                                    </div>
                                    <p className="company-name">St. Joseph's High School</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divf fdirc c1 cProjects">
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
                    <div className="divf fdirc c1 cWork">
                        <p className="mH">#WORK EXPERIENCE</p>
                        <div className="divf fdirc allWorks">
                            <div className="divf fdirc workCard">
                                <div className="divf workMainH">
                                    <p className="position-name">Coding Tutor</p>
                                    <p className="timesWork">Nov,2023 - Ongoing</p>
                                </div>
                                <p className="company-name">CodeKaroYaaro</p>
                            </div>
                            <div className="divf fdirc workCard">
                                <div className="divf workMainH">
                                    <p className="position-name">Project Intern</p>
                                    <p className="timesWork">Jun,2023 - Aug,2023</p>
                                </div>
                                <p className="company-name">SDC, KJSIT</p>
                            </div>
                            <div className="divf fdirc workCard">
                                <div className="divf workMainH">
                                    <p className="position-name">Project Intern</p>
                                    <p className="timesWork">Apr,2023 - Jun,2023</p>
                                </div>
                                <p className="company-name">Geofencing Project, Somaiya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}