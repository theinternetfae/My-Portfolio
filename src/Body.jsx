import { projects } from "./jsFiles/projects.js";
import { useState } from "react";
import SectionCard from "./utilComp/SectionCard.jsx";
import NotFound from "./utilComp/NotFound.jsx";

function Body() {
    const [projectCount, setProjectCount] = useState(0);
    const [found, setFound] = useState(false);
    const currentProject = projects[projectCount];

    function backward() {
        setProjectCount(prev => Math.max(prev - 1, 0));
    }

    function forward() {
        setProjectCount(prev => Math.min(prev + 1, projects.length - 1));
    }

    return ( 
        <div className="overall-body">
    
            <h1>Hi, I'm <span className="name">TheInternetFae</span></h1>
            <p className="sub-heading">Welcome to my portfolio!</p>
    
            <section className="project-body">

                {!found ? <i 
                    className="bi-caret-left-fill arrow"
                    onClick={() => backward()}
                    style={ projectCount === 0 ? {
                        cursor: "not-allowed",
                        color: "grey"
                    } : undefined}
                ></i> : ""}

                {!found ? <SectionCard 
                    currentProject={currentProject}
                    editCount={setProjectCount}
                    found={setFound}
                    count={projectCount}
                /> : <NotFound
                    found={setFound}
                /> 
                }

                {!found ? <i 
                    className="bi-caret-right-fill arrow"
                    onClick={() => forward()}
                    style={ projectCount === projects.length - 1 ? {
                        cursor: "not-allowed",
                        color: "grey"
                    } : undefined}
                ></i> : ""}

            </section>

        </div>
    );
}

export default Body;