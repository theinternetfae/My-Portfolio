import { SiHtml5, SiTailwindcss, SiReact } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";

function Body() {
    return ( 
        <div className="overall-body">
    
            <h1>Hi, I'm <span className="name">TheInternetFae</span></h1>
            <p className="sub-heading">Welcome to my portfolio!</p>
    
            <section className="project-body">

                <i className="bi-caret-left-fill arrow"></i>

                <section className="blur">
                    <div className="project-info-box">
    
                        <div className="project-info">
                            <h2>Name</h2>
                            <p>Optima</p>
                        </div>
    
                        <div className="project-info">
                            <h2>Description</h2>
                            <p>Optima is a productivity app that analyzes task completion patterns to dynamically adapt its behavior. Its core feature, a self-evolving system, adjusts based on user consistency to encourage sustainable productivity rather than burnout.</p>
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
                                poster="/images/Optima-banner.png"
                            >
                                <source src="/videos/Girlypop-first-recording.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <i className="bi-caret-right-fill arrow"></i>

            </section>

        </div>
    );
}

export default Body;