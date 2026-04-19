function Landing() {
    return ( 
        <section className="landing-page">
            
            <div className="name-cont">
                <p>Hi, I'm <span>TheInternetFae</span></p>
            </div>
            
            <div className="title-cont">
                FRONT-END DEVELOPER
            </div>
            
            <div className="main">
                <div className="img-cont">
                    <img src="./images/Me.jpg" alt="" />
                </div>
                <h1>MY PORTFOLIO</h1>
                <div className="land-directions">
                    <button className="about">About</button>
                    <button className="projects">Projects</button>
                </div>
            </div>

        </section>
    );
}

export default Landing;