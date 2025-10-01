import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectsData = [
  {
    title: "Crypto Tracker",
    category: "Frontend",
    image: "/Crypto.png",
    description: "Live crypto price tracker with chart and filter options using external APIs.",
    tech: ["React", "API", "Chart.js", "JavaScript", "HTML", "CSS",],
    link: "https://crypto-tracker-mu-ivory.vercel.app/",
    github: "https://github.com/omchaturvedi0412/cryptotracker"
  },
  {
    title: "Nexura Website",
    category: "Frontend",
    image: "/nexura.png",
    description: "A website for the club Nexura at RGPV.",
        tech: ["React", "API", "JavaScript", "HTML", "CSS",],

    link: "https://nexura-sigma.vercel.app/",
    github: "https://github.com/omchaturvedi0412/cryptotracker"
  },
  {
    title: "EvolveEdge Website",
    category: "Frontend",
    image: "/EvolveEdge.png",
    description: "A website for agency EvolveEdge.",
        tech: ["React", "API", "JavaScript", "HTML", "CSS",],

    link: "https://evolve-edge.vercel.app/",
    github: "https://github.com/omchaturvedi0412/cryptotracker"
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className={`projects-section ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech?.map((tech, idx) => (
                  <span key={idx} className="tooltip">
                    {tech}
                    <span className="tooltiptext">{tech}</span>
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">Live</a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
