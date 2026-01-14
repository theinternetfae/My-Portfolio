function Loader() {
    return ( 
        <section className="loader">
            
            <div className="load">
                <span style={{"--i": 1}} className="--i"></span>
                <span style={{"--i": 2}} className="--i:2"></span>
                <span style={{"--i": 3}} className="--i:3"></span>
                <span style={{"--i": 4}} className="--i:4"></span>
                <span style={{"--i": 5}} className="--i:4"></span>
                <span style={{"--i": 6}} className="--i:4"></span>
                <span style={{"--i": 7}} className="--i:4"></span>
                <span style={{"--i": 8}} className="--i:4"></span>
            </div>
            
            <p>
                Please hold on...
            </p>
        
        </section>
    );
}

export default Loader;