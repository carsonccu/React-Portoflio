import Topper from "./components/Nav/nav"
import React, { useState } from 'react';
import Intro from "./components/About/about";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Skills from './components/Skills/skills';
import { BrowserRouter as Router, Navigate, Route, Routes, Switch } from 'react-router-dom';


function App() {

    return (

        <div className="App">

            <Topper />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/Intro" element={<Intro />} />
                <Route path="/Works" element={<Works />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Skills" element={<Skills />} />
            </Routes>

        </div>



    );
}

export default App;