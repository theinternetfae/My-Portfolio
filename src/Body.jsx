import { SiHtml5, SiTailwindcss, SiReact, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "./projects.js";
import { useState } from "react";

function Body() {
    const [projectCount, setProjectCount] = useState(0);
    const currentProject = projects[projectCount];

    console.log(currentProject);

    function backward() {
        setProjectCount(prev => Math.max(prev - 1, 0));
    }

    function forward() {
        setProjectCount(prev => Math.min(prev + 1, projects.length - 1));
    }

    const techIcons = {
        HTML: {
            Icon: SiHtml5,
            color: "#E34F26"
        },
        React: {
            Icon: SiReact,
            color: "#61DAFB"
        },
        TailwindCSS: {
            Icon: SiTailwindcss,
            color: "#38BDF8"
        },
        JavaScript: {
            Icon: SiJavascript,
            color: "#F7DF1E"
        },
        CSS: {
            Icon: SiCss3,
            color: "#1572B6"
        },
        Python: {
            Icon: SiPython,
            color: "#3776AB"
        }
    };

    return ( 
        <div className="overall-body">
    
            <h1>Hi, I'm <span className="name">TheInternetFae</span></h1>
            <p className="sub-heading">Welcome to my portfolio!</p>
    
            <section className="project-body">

                <i 
                    className="bi-caret-left-fill arrow"
                    onClick={() => backward()}
                    style={ projectCount === 0 ? {
                        cursor: "not-allowed",
                        color: "grey"
                    } : undefined}
                ></i>

                <section className="blur" style={{
                    boxShadow: `0 0 0 2px ${currentProject.border[0]}, 0 0 12px ${currentProject.border[1]}, 0 0 24px ${currentProject.border[2]}`
                }}>
                    <div className="project-info-box">
    
                        <div className="project-info">
                            <h2>Name</h2>
                            <p>{currentProject.name}</p>
                        </div>
    
                        <div className="project-info">
                            <h2>Description</h2>
                            <p>{currentProject.description}</p>
                        </div>
    
                        <div className="project-info">
                            <h2>Language and tools</h2>
                            <div className="icons">
                                
                                {currentProject.langTools.map(tool => {
                                    const iconProps = techIcons[tool];
                                    if (!iconProps) return "Languages not inputed";

                                    const {Icon, color} = iconProps;

                                    return <Icon 
                                        key={tool} 
                                        style={{ color }} 
                                        title={tool}
                                    />;
                                })}
                                
                            </div>
                        </div>

                        <div className="project-info">
                            <h2>More</h2>
                            <div className="icons">
                                <a href={currentProject.gitLink} target="_blank" title="Github file"><FaGithub /></a>
                                <FaGlobe style={!currentProject.live ? {
                                    color: "grey",
                                    cursor: "not-allowed"
                                } : ""} title={`Live view ${!currentProject.live && "(Not available)"}`}/>
                            </div>
                        </div>

                    </div>
                    <div className="project-vid-box">
                        <div className="search-box">
                            <input type="text" placeholder="Search project"/>
                            <button className="bi bi-search"></button>
                        </div>
                        <div className="vid">
                            <video controls 
                                className="video"
                                poster={currentProject.banner}
                            >
                                <source src={currentProject.video} />
                            </video>
                        </div>
                    </div>
                </section>

                <i 
                    className="bi-caret-right-fill arrow"
                    onClick={() => forward()}
                    style={ projectCount === projects.length - 1 ? {
                        cursor: "not-allowed",
                        color: "grey"
                    } : undefined}
                ></i>

            </section>

        </div>
    );
}

export default Body;