import { useState } from "react";
import { SiHtml5, SiTailwindcss, SiReact, SiJavascript, SiCss3, SiAppwrite, SiGithub, SiFigma } from "react-icons/si";

function About() {

    const techIcons = [
        {
            Icon: SiHtml5,
            color: "#E34F26",
            tool: "HTML"
        },
        {
            Icon: SiCss3,
            color: "#1572B6",
            tool: "CSS"
        },
        {
            Icon: SiJavascript,
            color: "#F7DF1E",
            tool: "JavaScript"
        },
        {
            Icon: SiReact,
            color: "#61DAFB",
            tool: "React"
        },
        {
            Icon: SiTailwindcss,
            color: "#38BDF8",
            tool: "TailwindCSS"
        },
        {
            Icon: SiAppwrite,
            color: "#FD366E",
            tool: "Appwrite"
        },
        {
            Icon: SiGithub,
            color: "#181717",
            tool: "GitHub"
        },
        {
            Icon: SiFigma,
            color: "#F24E1E",
            tool: "Figma"
        }
    ];

    const [expanded, setExpanded] = useState(false);

    return ( 
        <section className="about-me">
            <h1>Hi! I'm <span>TheInternetFae</span></h1>

            <div className="introductory">

                <div className="intro-div img-div">
                    <img src="./images/Me.jpg" alt="My picture" />
                </div>
                
                <div className="intro-div div-diff">

                    <section>
                        <span className="span-one">Full name:</span><br/>
                        <span className="span-two">Favour Egwele</span>
                    </section>

                    <section>
                        <span className="span-one">Role:</span><br/>
                        <span className="span-two">Front-End Developer</span>
                    </section>
                
                </div>
            </div>

            <div className="desc">
                <h2>Description:</h2>
                <div className="full-desc">
                    
                    <p>I’m a Frontend Developer focused on building responsive, user-friendly web applications using React, JavaScript, HTML, and CSS.</p>

                    <p>I specialize in creating clean interfaces backed by thoughtful UI logic and solid state management, with a strong focus on usability and real-world functionality.</p>
                    
                    {expanded && (
                        <>
                            <p>I’ve built projects like Optima, a task management app with Appwrite integration, where I handled authentication, data persistence, and dynamic UI updates. Through projects like this, I’ve developed a deeper understanding of how frontend systems connect to real backends and how to structure scalable, maintainable code.</p>

                            <p>I care about understanding how things work under the hood, not just making them work. This pushes me to write better, more intentional code and continuously improve my approach.</p>

                            <p>I’m currently seeking internship or junior frontend roles where I can contribute, learn from experienced developers, and grow in a collaborative environment.</p>
                        </>
                    )}

                    <span onClick={() => setExpanded(prev => !prev)}>{expanded ? "See less..." : "See more..."}</span>
                </div>
            </div>

            <div className="desc">
                <h2>My Tools:</h2>
                <div className="full-tools">

                    {
                        techIcons.map((t, i) => {
                            const {Icon, tool, color} = t

                            return <Icon 
                                className="icon"
                                key={i} 
                                style={{ color }} 
                                title={tool}
                            />;
                        })
                    }

                </div>
            </div>

            <div className="desc">
                <h2>My Contacts:</h2>
                <div className="full-contacts">

                    <a href="https://wa.me/+2349043809172" target="_blank">
                        <div className="contact">
                            <i className="bi bi-whatsapp"></i>
                            <p>+234 904 380 9172</p>
                        </div>
                    </a>

                    <a href="https://github.com/theinternetfae" target="_blank">
                        <div className="contact">
                            <i className="bi bi-github"></i>
                            <p>theinternetfae | Favour Egwele</p>
                        </div>

                    </a>

                    <a href="mailto:favoregwele@gmail.com">
                        <div className="contact">
                            <i className="bi bi-envelope-at-fill"></i>
                            <p>favoregwele@gmail.com</p>
                        </div>
                    </a>

                </div>
            </div>
        </section> 
    );
}

export default About;