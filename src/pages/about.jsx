import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="about-container">   
            <div className="about-header">
                    <h1>A little about me</h1>
                </div>
                <div className="about-introduction">
                    <h2 className="about-headers">Introduction</h2>
                    <h3>I go by the handle 'i_ct_nawb' on almost all social media platforms. Or by 'NaWB'. I'm an 18 year old computer-science engineering student. I was born and brought up in India.</h3>
                    <h3>I like to think that I'm a very generic and unassuming person on the outside. I'm an overthinking, hyper self-aware, guy who thinks he is smart.</h3>
                    <h3>I have been lost in various fictitious worlds of many kinds from a very young age. Any kind of activity that requires me reading and imagining things is what excites me. Some of my very first obsessions have been related to novels</h3>
                    <h3>My very first encounter with media and entertainment in general was through the novels of <a href="">Enid Blyton</a>.</h3>
                    <h3>I have spent so much time with some of my obsessions that I would consider them as hobbies at this point.</h3>
                    <h2 className="about-headers">Hobbies</h2>
                    <h3>I like working out, playing football, reading and conusiming various kinds of media including manga, books, novels, anime, movies. I have dabbled a little in visual novels and light novels. Nowadays I take more pleasure in full stack development and reading Manga. My ambition is to one day get into game development</h3>
                    <h3>I consider myself a very big fan of the following franchises so I like to consider these as my hobbies too. </h3>
                    <h3>
                        <ul>
                            <li>One Piece</li>
                            <li>Clash of Clans</li>
                            <li>Detective Conan</li>
                            <li>Monster</li>
                            <li>Enid Blyton's novels</li>
                        </ul>
                    </h3>
                    <h3>Go to <a href="/Hof">Hall of fame</a> for my favourite pieces of media</h3>
                    <h2 className="about-headers">Connections</h2>
                    <h3> <a href="https://anilist.co/user/NaWB">Anilist</a> <a href="https://x.com/i_ct_nawb">Twitter/X</a> <a href="
https://discordapp.com/users/864145075419349012">Discord</a></h3>
    

                </div>
            </div>
            <div className="flex-container">
                <div className="flex-item"><Link to="/">Home</Link></div>
                <div className="flex-item"><Link to="/HoF">Hall of Fame</Link></div>
            </div>
        </>
        
    );
};

export default About;