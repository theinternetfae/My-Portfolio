import { projects } from "./jsFiles/projects.js";
import { useEffect, useState } from "react";
import SectionCard from "./utilComp/SectionCard.jsx";
import AboutProject from "./utilComp/AboutProject.jsx"

function Body() {

    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        console.log("Current Project About:", currentProject);
    }, [currentProject])

    return ( 

        <section className="projects-body">

            <div className={`back-cont ${!currentProject && "hidden"}`}>

                <button 
                    className="bi bi-arrow-left-square-fill go-back"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentProject(null);
                    }}
                ></button>

            </div>

            {
                currentProject ? (
                    <>
                        <h1 style={{
                            color: currentProject.border[1]
                        }}>{currentProject.name}</h1>

                        <div className="project-about">
                            <AboutProject
                                project={currentProject}
                            />
                        </div>
                    </>
                ) : (

                    <>
                        <h1 className={`${!currentProject && "mt-12 lg:mt-14"}`}>My Projects</h1>
                
                        <div className="project-cards">
                            {projects.map((project) => {
                                return <SectionCard
                                    key={project.id}
                                    project={project}
                                    aboutProject={(project) => setCurrentProject(project)}
                                />
                            })}          
                        </div>                    
                    </>

                )
            }
        </section>
    );
}

export default Body;