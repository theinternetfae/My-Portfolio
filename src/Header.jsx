import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();
    console.log('loca:', location);

    return ( 
        <header className="sticky">
            <nav>
                <img src="/images/Logo-InternetFae.png" alt="" />
                <div className="nav-box">
                    
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