import React from "react";
import { Link } from "react-router-dom";

const Manga = () => {
    return (
        <>
            <div className="anime-container">
                <h1>Titles from left to right, row wise:</h1><br/>
                <p>Cant be bothered to update links</p>
                <h2><a href="https://anilist.co/anime/21827/Violet-Evergarden/">Ajin</a></h2>
                <h2><a href="https://anilist.co/anime/120377/Cyberpunk-Edgerunners/">Happiness</a></h2>
                <h2><a href="https://anilist.co/anime/777/HELLSING-OVA/">Fire Punch</a></h2>
                <h2><a href="https://anilist.co/anime/100922/Grand-Blue/">Kaoru Hana</a></h2>
                <h2><a href="https://anilist.co/anime/21711/91Days/">Death note C kira</a></h2>
                <h2><a href="https://anilist.co/anime/21/ONE-PIECE/">The Fable</a></h2>
                <h2><a href="https://anilist.co/anime/19/MONSTER/">Oyasumi Punpun</a></h2>
                <h2><a href="https://anilist.co/anime/918/Gintama/">Vinland Saga</a></h2>
                <h2><a href="https://anilist.co/anime/9253/SteinsGate/">One piece</a></h2>
            </div>
            <div className="flex-container">

                <div className="flex-item"><Link to="/HoF">Hall of Fame</Link></div>
            </div>
        </>
    );
};

export default Manga;