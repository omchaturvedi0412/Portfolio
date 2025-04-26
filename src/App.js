import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSimple from "./components/NavbarSimple";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Projects"; // ⬅️ Import your Projects section
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

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
        <Projects darkMode={darkMode} /> {/* ⬅️ Add Projects section here */}
        <Testimonials darkMode={darkMode} />
        <Contact darkMode={darkMode} />

        {/* Optional Routes */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/resume" element={<h1>Resume</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
