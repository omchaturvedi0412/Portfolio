import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarSimple = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`topnav ${darkMode ? 'dark' : ''}`}>
      {/* Left side - Title */}
      <div className="nav-title">
        <p className="Portfolio_Navbar_Simple_Title">Portfolio</p>
      </div>

      {/* Right side - Toggle + Links */}
      <div className="nav-right">
        <label className="toggle-switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider"></span>
        </label>
        <Link to="/">Home</Link>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>
        <a href="/assets/OM resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default NavbarSimple;
