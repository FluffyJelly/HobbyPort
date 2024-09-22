import React from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpeg";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={pfp} alt="JT" />
        </div>
    );
};

export default Navbar;