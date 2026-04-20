import {Link} from "react-router-dom";

function Landing() {
    return ( 
        <section className="landing-page">

            <div className="intro">
                <div className="name-cont">
                    <p>Hi, I'm <span>TheInternetFae</span></p>
                </div>
                
                <div className="title-cont">
                    FRONT-END DEVELOPER
                </div>
            </div>

            <div className="main">
                <div className="img-cont">
                    <img src="./images/Me.jpg" alt="" />
                </div>
                <h1>MY PORTFOLIO</h1>
                <div className="land-directions">
                    
                    <Link to="/about">
                        <button className="about">About</button>
                    </Link>
                    
                    <Link to="/projects">
                        <button className="projects">Projects</button>
                    </Link>
                    
                </div>
            </div>

        </section>
    );
}

export default Landing;