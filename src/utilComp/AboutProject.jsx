import { SiHtml5, SiTailwindcss, SiReact, SiJavascript, SiCss3, SiAppwrite, SiVite } from "react-icons/si";
import { useState, useRef, useEffect, useMemo } from "react";


function AboutProject({project}) {
    const {banner, description, problem, solution, features, challenges, langTools, gitLink, live, name} = project;

    const techIcons = [
        {
            name: "HTML",
            Icon: SiHtml5,
            color: "#E34F26"
        },
        {
            name: "React",
            Icon: SiReact,
            color: "#61DAFB"
        },
        {
            name: "TailwindCSS",
            Icon: SiTailwindcss,
            color: "#38BDF8"
        },
        {
            name: "JavaScript",
            Icon: SiJavascript,
            color: "#F7DF1E"
        },
        {
            name: "CSS",
            Icon: SiCss3,
            color: "#1572B6"
        },
        {
            name: "Appwrite",
            Icon: SiAppwrite,
            color: "#FD366E"
        },
        {
            name: "Vite",
            Icon: SiVite,
            color: "#747BFF"
        }
    ];


    return (

        <section className="project-about-details">

            <div className="project-banner">
                <img src={banner} alt="project banner" />
            </div>

            <div className="desc">
                <h2>Problem:</h2>
                <div className="full-desc">
                    {problem}
                </div>
            </div>

            <div className="desc">
                <h2>Solution:</h2>
                <div className="full-desc">
                    {solution}
                </div>
            </div>

            <div className="desc">
                <h2>Features:</h2>
                <div className="full-feats">
                    <ol>
                        {
                            features.map((f, i) => {
                                return <li key={i}>{f}</li>
                            })
                        }
                    </ol>
                </div>
            </div>

            <div className="desc">
                <h2>Challenges:</h2>
                <div className="full-desc">
                    {challenges}
                </div>
            </div>

            <div className="desc">
                <h2>Tech stack:</h2>
                <div className="full-tools">
                    {
                        techIcons.map(I => {
                            const {name, Icon, color} = I;

                            if (langTools.includes(name)) {
    
                                return <Icon
                                    className="icon"
                                    key={name} 
                                    style={{ color }} 
                                    title={name}
                                />

                            }
                        })
                    }
                </div>
            </div>

            <div className="desc">
                <h2>More:</h2>
                <div className="full-more">

                    <a href={gitLink} target="_blank">
                        <button className="contact" 
                        title="Check out the project git"
                        disabled={!gitLink}
                        >
                            <i className="bi bi-github cont-icon"></i>
                            <p>{name} | theinternetfae</p>
                        </button>

                    </a>

                    <a href={live} target="_blank">
                        <button className={`contact ${!live && "border-white bg-grey hover:text-white cursor-not-allowed"}`} 
                        title={!live ? "Live project coming soon!" : "See the Live project"}
                        disabled={!live}
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

export default AboutProject;