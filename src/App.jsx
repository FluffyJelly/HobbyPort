import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import HoF from "./pages/HoF";
import Anime from "./pages/anime";
import Manga from "./pages/manga";

function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path= "/HoF" element={<HoF/>} />
                <Route path="/anime" element={<Anime/>} />
                <Route path="/manga" element={<Manga/>} />

            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
