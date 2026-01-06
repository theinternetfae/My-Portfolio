import { SiHtml5, SiTailwindcss, SiReact } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "./projects.js";
import { useEffect, useState } from "react";

function Body() {
    let projectCount = 0;
    const [currentProject, setCurrentProject] = useState(projects[projectCount]);

    console.log(currentProject);

    function backward() {
        projectCount--;
        console.log("clicked");
    }

    function forward() {
        projectCount++;
        console.log("clicked");
    }

    useEffect(() => {
        console.log(projectCount);
    }, [projectCount]) 

    return ( 
        <div className="overall-body">
    
            <h1>Hi, I'm <span className="name">TheInternetFae</span></h1>
            <p className="sub-heading">Welcome to my portfolio!</p>
    
            <section className="project-body">

                <i 
                    className="bi-caret-left-fill arrow"
                    onClick={() => backward()}
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
                                <SiHtml5 />
                                <SiTailwindcss />
                                <SiReact />
                            </div>
                        </div>

                        <div className="project-info">
                            <h2>More</h2>
                            <div className="icons">
                                <FaGithub />
                                <FaGlobe />
                            </div>
                        </div>

                    </div>
                    <div className="project-vid-box">
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
                ></i>

            </section>

        </div>
    );
}

export default Body;