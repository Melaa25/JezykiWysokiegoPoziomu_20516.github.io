import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Lab7 from "./Lab7";
import Lab8 from "./Lab8";
import Lab9 from "./pages/Lab9/Lab9";
import NotFound from "./pages/NotFound";

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/lab7">Lab 7</Link></li>
            <li><Link to="/lab8">Lab 8</Link></li>
            <li><Link to="/lab9">Lab 9</Link></li>
          </ul>
        </nav>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab7" element={<Lab7 />} />
        <Route path="/lab8" element={<Lab8 />} />
        <Route path="/lab9/*" element={<Lab9 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home(){
  return (
    <div>
      <h1> Witamy na stronie głównej</h1>
      <p>Wybierz jedną z zakładek powyżej: Lab 7, Lab 8, lub Lab 9.</p>
    </div>
  );
}
export default App;