import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1 className="about-headers">Welcome to my site</h1><br/>
                <h2>This website will be a documentation about me and will serve as an experience for my more professional websites. A sort of portfolio for my hobbies, if you will.</h2>
                <h2>Feel free to look around. Its just about things that I like, from Anime to games to more general stuff too.</h2>
            </div>
            <div className="flex-container">
                <div className="flex-item"><Link to="/about">About Me</Link></div>
                <div className="flex-item"><Link to="/HoF">Hall of Fame</Link></div>
            </div>
        </>
    );
};

export default Home;