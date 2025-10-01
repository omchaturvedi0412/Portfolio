import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const texts = [
  "A Full-Stack Developer.",
  "A Video Editor",
  "A UIUX Designer.",
  "CyberSecurity Expert.",
  

];

const Hero = ({ darkMode }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText("");
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);

  return (
    <section className={`hero-container ${darkMode ? "dark" : ""}`}>
      <div className="hero-left">
        <h1 className="hero-heading">
          Hi, It's <span className="highlight">Om</span>
        </h1>
        <h2 className="typed-text">
          {displayText}
          <span className="cursor">|</span>
        </h2>
        <p className="hero-desc">
          Passionate about building performant and beautiful web experiences.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/omchaturvedi04" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/omchaturvedi0412" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/om_chaturvedi04.12/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/omchaturvedi04" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="mailto:omchaturvedi201@gmail.com"><MdEmail /></a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/Om.png" alt="Om Chaturvedi" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
