import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const [optSm, setOptSm] = useState(false);
    const location = useLocation();

    return ( 
        <header className="sticky">
            <nav>
                <a href="https://github.com/theinternetfae" target="_blank"><img src="./images/Logo-InternetFae.png" alt="" /></a>

                <div className="nav-box-sm lg:hidden">
                    <button className="bi bi-list nav-icon" onClick={() => setOptSm(prev => !prev)}></button>
                    {optSm && (
    
                        <div className="navigating-sm">

                            <Link to="/">
                                <button className={`navigation ${location.pathname === "/" ? "selected-sm" : ""}`} onClick={() => setOptSm(prev => !prev)}>Portfolio</button>
                            </Link>

                            <Link to="/about">
                                <button className={`navigation ${location.pathname === "/about" ? "selected-sm" : ""}`} onClick={() => setOptSm(prev => !prev)}>About me</button>
                            </Link>

                        </div>

                    )}
                </div>                

                <div className="nav-box hidden lg:flex">
                    
                    <Link to="/">
                        <button className={`navigating ${location.pathname === "/" ? "boxy" : ""}`}>Portfolio</button>
                    </Link>

                    <Link to="/about">
                        <button className={`navigating ${location.pathname === "/about" ? "boxy" : ""}`}>About me</button>
                    </Link>

                </div>
            </nav>
        </header>
    );
}

export default Header;