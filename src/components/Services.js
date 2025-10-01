import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Frontend Development",
    icon: "🖥️",
    description:
      "Building responsive, high-performance, and beautiful interfaces using React, Tailwind, and modern JavaScript.",
  },
  {
    title: "Backend Development",
    icon: "🧠",
    description:
      "Secure and scalable APIs using Node.js, Express, MongoDB. Auth, database, and deployment handled with care.",
  },
  {
    title: "Fullstack Projects",
    icon: "🧩",
    description:
      "End-to-end project development including payment gateways, dashboards, and full authentication flows.",
  },
  {
    title: "UI/UX & Animations",
    icon: "🎨",
    description:
      "Smooth, eye-catching UI/UX using Framer Motion, GSAP, and modern design principles.",
  },
  {
    title: "Video Editing",
    icon: "🎬",
    description:
      "Creating engaging video content with Capcut.",
  },
];

const Services = ({ darkMode }) => {
  return (
    <section id="services" className={`services-section ${darkMode ? "dark" : ""}`}>
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
