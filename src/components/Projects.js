import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // Create this for styling

const projectsData = [
  
  {
    title: "Crypto Tracker",
    category: "Frontend",
    image: "/Crypto.png",
    description: "Live crypto price tracker with chart and filter options using external APIs.",
    tech: ["React", "Chart.js", "REST API"],
    link: "https://crypto-tracker-mu-ivory.vercel.app/",
    github: "https://github.com/omchaturvedi0412/cryptotracker"
  },
  
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

const Projects = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <section className={`projects-section ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title">My Projects</h2>

      <div className="project-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`project-filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
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
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tooltip">
                    {tech}
                    <span className="tooltiptext">{tech}</span>
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">Live</a>
                <a href={project.github} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
