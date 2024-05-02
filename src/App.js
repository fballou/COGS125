import logo from './logo.svg';
import './App.css';

import React, { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import About from './about';
import Home from './home';


function App() {
  return (
    <div className="background">
      <main>
        <section>
          <Routes>
            <Route path="/COGS125.github.io/home" element={<Home />} />
            <Route path="/COGS125.github.io/about" element={<About />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </section>

      </main>

    </div> 
  );
}

export default App;
