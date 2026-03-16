import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const [optSm, setOptSm] = useState(false);
    const location = useLocation();

    return ( 
        <header className="sticky">
            <nav>

                <a href="https://github.com/theinternetfae" target="_blank">
                    <div className="logo-n-name">
                        <img src="images\TheInternetFae-Logo.png" alt="" />
                        <span>TheInternetFae</span>
                    </div>
                </a>

                <div className="about-projects">

                    <Link to="/">
                        <button className={`${location.pathname === "/" ? "border-b-mypurple text-mypurple" : ""}`}>About Me</button>
                    </Link>

                    <Link to="/projects">
                        <button className={`${location.pathname === "/projects" ? "border-b-mypurple text-mypurple" : ""}`}>Projects</button>
                    </Link>

                </div>
                
                <a className="contact-me" href="mailto:favoregwele@gmail.com">
                    Contact Me
                </a>

                <div className="nav-box-sm">
                    <button className="bi bi-list" onClick={() => setOptSm(prev => !prev)}></button>
                    {optSm && (
    
                        <div className="navigating-sm">

                            <Link to="/">
                                <button className={`navigation ${location.pathname === "/" ? "text-mypurple" : ""}`} onClick={() => setOptSm(prev => !prev)}>About me</button>
                            </Link>

                            <Link to="/projects">
                                <button className={`navigation ${location.pathname === "/projects" ? "text-mypurple" : ""}`} onClick={() => setOptSm(prev => !prev)}>Portfolio</button>
                            </Link>

                            <a className="navigation contact" href="mailto:favoregwele@gmail.com">
                                Contact Me
                            </a>

                        </div>

                    )}
                </div>                

            </nav>
        </header>
    );
}

export default Header;