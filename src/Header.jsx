function Header() {
    return ( 
        <header className="sticky">
            <nav>
                <img src="/images/Logo-InternetFae.png" alt="" />
                <div className="nav-box">
                    <a href=""><button className="navigating">Portfolio</button></a>
                    <a href=""><button className="navigating">About me</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;