function SectionCard({project, aboutProject}) {

    return ( 
        <section className="card-container">
            <div className="card">
                
                <div className="front" style={{
                    border: `3px solid ${project.border[0]}`,
                    background: project.border[0]
                }}> 
                    <img src={project.banner} alt="" />
                </div>

                <div className="back" style={{
                    border: `3px solid ${project.border[1]}`,
                    background: project.border[1]
                }}> 


                    <button onClick={(e) => {
                        e.preventDefault();
                        aboutProject(project);
                    }}>
                        <div className="contact" 
                        title="A quick skim of the project and its features"
                        >
                            <i className="bi bi-info-square-fill"></i>
                            <p>About</p>
                        </div>
                    </button>

                    <a href={project.gitLink} target="_blank">
                        <button className="contact" 
                        title="Check out the project git"
                        disabled={!project.gitLink}
                        >
                            <i className="bi bi-github cont-icon"></i>
                            <p>{project.name} | theinternetfae</p>
                        </button>

                    </a>

                    <a href={project.live} target="_blank">
                        <button className={`contact ${!project.live && "border-white bg-grey hover:text-white cursor-not-allowed"}`} 
                        title={!project.live ? "Live project coming soon!" : "See the Live project"}
                        disabled={!project.live}
                        >
                            <i className="bi bi-globe2"></i>
                            <p>Live site</p>
                        </button>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default SectionCard;