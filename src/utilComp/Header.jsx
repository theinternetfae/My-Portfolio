import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactCard from "./ContactCard.jsx";

function Header() {

    const [optSm, setOptSm] = useState(false);
    const [contactDeets, setContactDeets] = useState(false);
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
                
                <button className="contact-me" onClick={(e) => {
                    e.preventDefault();
                    setContactDeets(prev => !prev);
                }}>
                    Contact Me
                </button>

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

                            <button className="navigation contact" onClick={(e) => {
                                e.preventDefault();
                                setContactDeets(prev => !prev);
                            }}>
                                Contact Me
                            </button>

                        </div>

                    )}
                </div>                

            </nav>

            {contactDeets && <ContactCard close={() => setContactDeets(prev => !prev)}/>}
        </header>
    );
}

export default Header;