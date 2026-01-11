import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="sticky">
            <nav>
                <img src="/images/Logo-InternetFae.png" alt="" />
                <div className="nav-box">
                    
                    <Link to="/">
                        <button className="navigating">Portfolio</button>
                    </Link>

                    <Link to="/about">
                        <button className="navigating">About me</button>
                    </Link>

                </div>
            </nav>
        </header>
    );
}

export default Header;