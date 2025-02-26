// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './nav-bar/nav-bar';
import HomePage from './home-page/home-page';
import PeoplePage from './people-page/people-page';
import PaperPage from './paper-page/paper-page';
import './nav-bar/nav-bar.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/papers" element={<PaperPage />} />
            </Routes>
        </Router>
    );
};

export default App;

