import React, { useState, useEffect } from "react";
import "./Skill.css";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaFigma, FaPython, FaCode,
  FaVideo, FaLinux, FaJava, FaUsers, FaBusinessTime, FaHandshake, FaComments, FaUserShield
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiCplusplus, SiJavascript, SiCanva
} from "react-icons/si";

const skillsData = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, level: 90, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, level: 85, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, level: 85, category: "frontend" },
  { name: "React", icon: <FaReact />, level: 80, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, category: "frontend" },
  { name: "Front-End Development", icon: <FaReact />, level: 78, category: "frontend" },
  

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, level: 78, category: "backend" },
  { name: "Express.js", icon: <SiExpress />, level: 70, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 72, category: "backend" },
  { name: "Web Development", icon: <FaCode />, level: 80, category: "backend" },

  // Languages
  { name: "C++", icon: <SiCplusplus />, level: 45, category: "languages" },
  { name: "Python", icon: <FaPython />, level: 48, category: "languages" },
  { name: "Java", icon: <FaJava />, level: 70, category: "languages" },
  { name: "C (Programming Language)", icon: <FaCode />, level: 60, category: "languages" },

  // Tools
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 85, category: "tools" },
  { name: "Postman", icon: <SiPostman />, level: 70, category: "tools" },
  { name: "VS Code", icon: <FaCode />, level: 95, category: "tools" },
  { name: "Canva", icon: <SiCanva />, level: 75, category: "tools" },
  { name: "Linux", icon: <FaLinux />, level: 65, category: "tools" },

  // Design
  { name: "Figma", icon: <FaFigma />, level: 60, category: "design" },
  { name: "Video Editing", icon: <FaVideo />, level: 70, category: "design" },

  // Soft Skills
  { name: "Teamwork", icon: <FaUsers />, level: 85, category: "softskills" },
  { name: "Public Relations", icon: <FaHandshake />, level: 75, category: "softskills" },
  { name: "Business", icon: <FaBusinessTime />, level: 95, category: "softskills" },
  { name: "Management", icon: <FaBusinessTime />, level: 90, category: "softskills" },
  { name: "Problem Solving", icon: <FaCode />, level: 80, category: "softskills" },
  { name: "Leadership", icon: <FaUsers />, level: 100, category: "softskills" },
  { name: "Communication", icon: <FaComments />, level: 80, category: "softskills" },
  { name: "Business Management", icon: <FaBusinessTime />, level: 100, category: "softskills" },
  { name: "Business Communications", icon: <FaComments />, level: 100, category: "softskills" },
  { name: "Customer Relationship Management (CRM)", icon: <FaHandshake />, level: 100, category: "softskills" },
  { name: "Team Problem Solving", icon: <FaUsers />, level: 100, category: "softskills" },

  // Security
  { name: "Ethical Hacking", icon: <FaUserShield />, level: 65, category: "security" },
];

const categories = ["all", "frontend", "backend", "languages", "tools", "design", "softskills", "security"];

const Skills = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState(skillsData);

  useEffect(() => {
    setVisibleSkills(
      selectedCategory === "all"
        ? skillsData
        : skillsData.filter(skill => skill.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="skills" className={`skills-section ${darkMode ? "dark" : ""}`}>
      <h2 className="skills-title">🚀 My Skills</h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.06, rotate: 0.5 }}
          >
            <div className="icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div> {/* Skill name below the icon */}
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="percent-label">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
