import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                <li><Link to="/lab7">Lab 7</Link></li>
                <li><Link to="/lab8">Lab 8</Link></li>
                <li><Link to="/lab9">Lab 9</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;