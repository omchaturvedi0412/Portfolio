import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSimple from "./components/NavbarSimple";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Projects"; // ⬅️ Import your Projects section
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <>
        
          <NavbarSimple darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main portfolio sections */}
          <Hero darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Services darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          
          <Contact darkMode={darkMode} />
        </>
      </Router>
  );
}

export default App;
