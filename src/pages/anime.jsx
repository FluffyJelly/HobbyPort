import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="anime-container">
                <h1>Titles from left to right, row wise:</h1><br/>
                <h2><a href="https://anilist.co/anime/21827/Violet-Evergarden/">Violet Evergarden</a></h2>
                <h2><a href="https://anilist.co/anime/120377/Cyberpunk-Edgerunners/">Cyberpunk Edgerunner</a></h2>
                <h2><a href="https://anilist.co/anime/777/HELLSING-OVA/">Hellsing Ultimate</a></h2>
                <h2><a href="https://anilist.co/anime/100922/Grand-Blue/">Grand Blue</a></h2>
                <h2><a href="https://anilist.co/anime/21711/91Days/">91 days</a></h2>
                <h2><a href="https://anilist.co/anime/21/ONE-PIECE/">One Piece</a></h2>
                <h2><a href="https://anilist.co/anime/19/MONSTER/">Monster</a></h2>
                <h2><a href="https://anilist.co/anime/918/Gintama/">Gintama</a></h2>
                <h2><a href="https://anilist.co/anime/9253/SteinsGate/">Steins;Gate</a></h2>
            </div>
            <div className="flex-container">

                <div className="flex-item"><Link to="/HoF">Hall of Fame</Link></div>
            </div>
        </>
    );
};

export default Home;