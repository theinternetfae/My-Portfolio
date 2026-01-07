function NotFound({ found }) {
    return ( 
            <section className="blur-error">
                <img src="/images/Error-not-Found.png" alt="not-found" />
                <p>It seems that doesn't exist in my portfolio. Maybe you made a typo?</p>
                <button onClick={() => found(prev => !prev)}>Go back</button>
            </section>
    );
}

export default NotFound;