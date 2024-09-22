import React from "react";
import { Link } from "react-router-dom";
import anime from "../assets/anime.png";
import manga from "../assets/manga.jpg";


const HoF = () => {
    return (
        <>
            <div className="hof-container">
                <div className="hof-header"><h2>Hall of fame</h2></div>
                <div className="hof-header">Anime</div>
                <div className="hof-animeimage"><Link to="/anime"><img src={anime} alt="JT" /></Link></div>
                <div className="hof-header">Manga</div>
                <div className="hof-mangaimage"><Link to="/manga"><img src={manga} alt="JT" /></Link></div>
                <div className="hof-header">Games</div>
                <div> Just naming them coz I cant be bothered to gather pics and links anymore.
                    <ul>
                        <li>Clash of Clans</li>
                        <li>Worldless</li>
                        <li>Nameless Cat</li>
                        <li>Rain World</li>
                    </ul>
                </div>
                <div className="hof-header">Movies</div>
                <div>
                    <ul>
                        <li>Spiderverse</li>
                        <li>Barfi</li>
                        <li>Batman Trilogy</li>
                        <li>Real Steel</li>
                        <li>Journey to the centre of the earth</li>
                    </ul>
                </div>
                <div className="hof-header">Novels</div>
                <div>
                <ul>
                        <li>Enid Blyton's Mystery Series</li>
                        <li>Looking for Alaska - John Green</li>
                        <li>Animal Farm</li>
                        <li>Vampirates Series - Justin Somper</li>
                        <li>Quarantine Series - Lex Thomas</li>
                    </ul>
                </div>

            </div>
            <div className="flex-container">
                <div className="flex-item"><Link to="/">Home</Link></div>
                <div className="flex-item"><Link to="/about">About</Link></div>
            </div>
        </>
    );
};



export default HoF;