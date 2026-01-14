import { SiHtml5, SiTailwindcss, SiReact, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "./projects.js";
import { useState, useRef, useEffect, useMemo } from "react";

function SectionCard({ currentProject, editCount, found, count}) {

    const [searching, setSearching] = useState("");
    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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

    function findSearch() {
        
        if(!searching) return;

        const search = searching.toLowerCase();

        const searchedForr = projects.filter(project => {
            const projectName = project.name.toLowerCase()
            return search.split(" ").includes(projectName);
        });

        if(searchedForr.length === 0) found(prev => !prev)

        setSearching("");
        editCount(searchedForr[0].id);
    }



    const [expanded, setExpanded] = useState(false);
    const LIMIT = 33;

    const truncate = useMemo(() => {

        const descArr = currentProject.description.split(" ");

        if(expanded || descArr.length <= LIMIT) {
            return currentProject.description
        }

        return descArr.slice(0, LIMIT).join(" ");

    }, [expanded, count]);

    const isTruncated = currentProject.description.split(" ").length > LIMIT;



    
    useEffect(() => {
        
        function onEnter(e) {

            if (e.key === "Enter") {
                        
                const search = searching.toLowerCase();

                const searchedForr = projects.filter(project => {
                    const projectName = project.name.toLowerCase()
                    return search.split(" ").includes(projectName);
                });

                if(searchedForr.length === 0) found(prev => !prev)

                setSearching("");
                editCount(searchedForr[0].id);
                
            }
        
        }

        window.addEventListener("keydown", onEnter);
        return () => window.removeEventListener("keydown", onEnter);
    }, [searching, editCount, found]);

    const handlePlay = () => {
        console.log("called");
        videoRef.current?.requestFullscreen();
    };

    return ( 
        <section className="blur-cont">
            
            <div className="blur"/>

            <div className="blur-content" style={{
                boxShadow: `0 0 0 2px ${currentProject.border[0]}, 0 0 12px ${currentProject.border[1]}, 0 0 24px ${currentProject.border[2]}`
            }}>
            
                {/*PROJECT-INFO*/}
                <div className="project-info-box">

                    <div className="project-info">
                        <h2>Name</h2>
                        <p>{currentProject.name}</p>
                    </div>

                    <div className="project-info">
                        <h2>Description</h2>
                        <p>{truncate}
                            <span className="text-[#9D4EDD] cursor-pointer" 
                                onClick={
                                    () => setExpanded(prev => !prev)
                                }>
                                    {
                                        isTruncated ? (!expanded ? " ...More" : " less") : " "
                                    } 
                            </span>
                        </p>
                    </div>

                    <div className="project-info">
                        <h2>Languages and tools</h2>
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

                {/*PROJECT-VID*/}
                <div className="project-vid-box">
                    <div className="search-box">
                    
                        <input 
                            type="text" 
                            placeholder="Search project" 
                            value={searching} 
                            onChange={(e) => setSearching(e.target.value)} 
                        />

                        <button 
                            className="bi bi-search" 
                            onClick={() => findSearch()}
                        ></button>
                    
                    </div>
                    <div className="vid">
                        
                        <div className="play-cont">

                            {!isPlaying && (
                                <button
                                title="Play presentation"
                                onClick={() => {
                                    videoRef.current.play();
                                    setIsPlaying(true);
                                }}
                                className="bi bi-play-fill play-btn"
                                >
                                </button>
                            )}

                        </div>

                        <video controls={false}  
                            ref={videoRef}
                            className="video"
                            onPlay={handlePlay}
                            poster={currentProject.banner}
                            src={null}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SectionCard;