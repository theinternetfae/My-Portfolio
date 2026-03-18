import { useMemo, useState } from "react";
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
                    <img src="public\images\Me.jpg" alt="My picture" />
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
                    <p>I’m a Frontend Developer focused on building clean, thoughtful user experiences with React, JavaScript, HTML, and CSS.</p>
                    <p>I started learning to code in 2023 and have grown through a mix of structured learning, self-teaching, and real project work. I care deeply about understanding why things work, not just how, making me very passionate and invested in my work.</p>
                    
                    {expanded && (
                        <>
                            <p>Right now, I’m building personal projects that showcase my skill and understanding such as <b>Optima</b> and <b>GirlyPop</b> which you can see in my Projects. So far, working on these projects have helped me sharpen my skills in state management, UI logic, and thoughtful UX. I’m especially interested in building clean, maintainable systems and learning how real-world applications are structured behind the scenes.</p>
                            <p>I’m still early in my journey, but I’m consistent, curious, and not afraid to sit with hard problems until they make sense. I’m excited to keep growing, collaborating, and eventually contributing to teams that value intentional development and continuous learning.</p>
                            <p>I'm currently seeking out Internship or Junior dev roles where I have guidance on my work and room to grow.</p>
                        </>
                    )}

                    <span onClick={() => setExpanded(prev => !prev)}>{expanded ? "See less..." : "See more..."}</span>
                </div>
            </div>

            <div className="my-tools">
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

            <div className="my-contacts">
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