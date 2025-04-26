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
        <Link to="/services">Services</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavbarSimple;
