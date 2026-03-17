import { SiHtml5, SiTailwindcss, SiReact, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "../jsFiles/projects.js";
import { useState, useRef, useEffect, useMemo } from "react";

function SectionCard({project}) {

    // const techIcons = {
    //     HTML: {
    //         Icon: SiHtml5,
    //         color: "#E34F26"
    //     },
    //     React: {
    //         Icon: SiReact,
    //         color: "#61DAFB"
    //     },
    //     TailwindCSS: {
    //         Icon: SiTailwindcss,
    //         color: "#38BDF8"
    //     },
    //     JavaScript: {
    //         Icon: SiJavascript,
    //         color: "#F7DF1E"
    //     },
    //     CSS: {
    //         Icon: SiCss3,
    //         color: "#1572B6"
    //     },
    //     Python: {
    //         Icon: SiPython,
    //         color: "#3776AB"
    //     }
    // };

    return ( 
        <section className="card-container">
            <div className="card">
                
                <div className="front" style={{
                    border: `3px solid ${project.border[0]}`,
                    background: project.border[0]
                }}> 
                    <img src={project.banner} alt="" />
                </div>

                <div className="back" style={{
                    border: `3px solid ${project.border[1]}`,
                    background: project.border[1]
                }}> 


                    <button>
                        <div className="contact" 
                        title="A quick skim of the project and its features"
                        >
                            <i className="bi bi-info-square-fill"></i>
                            <p>About</p>
                        </div>
                    </button>

                    <a href={project.gitLink} target="_blank">
                        <button className="contact" 
                        title="Check out the project git"
                        disabled={!project.gitLink}
                        >
                            <i className="bi bi-github cont-icon"></i>
                            <p>{project.name} | theinternetfae</p>
                        </button>

                    </a>

                    <a href={project.live} target="_blank">
                        <button className={`contact ${!project.live && "border-white bg-grey hover:text-white cursor-not-allowed"}`} 
                        title={!project.live ? "Live project unavailable" : "See the Live project"}
                        disabled={!project.live}
                        >
                            <i className="bi bi-globe2"></i>
                            <p>Live site</p>
                        </button>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default SectionCard;