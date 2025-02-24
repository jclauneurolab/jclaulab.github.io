import React from 'react';
import './nav-bar.css';
import logo from './logo.png';

const Navbar = () => {
  return (

    <nav className="navbar">
        <div className="navbar-left">
        <a href="/" className="logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </a>
        </div>
        <div className="navbar-right">
            <ul className="nav-links">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/people">People</a>
                </li>
                <li>
                    <a href="/papers">Papers</a>
                </li>
                <li>
                    <a href="/papers">News</a>
                </li>
                <li className="contact-button">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;