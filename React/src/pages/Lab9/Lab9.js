import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import Favorite from "./Favorite";
import Contact from "./Contact";

function Lab9(){
    return (
        <div>
            <h1>Lab 9</h1>
            <nav>
                <ul>
                    <li><Link to="/lab9/about"> O mnie</Link></li>
                    <li><Link to="/lab9/interests"> Zainteresowania</Link></li>
                    <li><Link to="/lab9/favorite"> Ulubiony film</Link></li>
                    <li><Link to="/lab9/contact"> Kontakt</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="about" element={<AboutMe />} />
                <Route path="interests" element={<Interests />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="contact" element={<Contact />} />

            </Routes>
        </div>
    );
}
export default Lab9;
