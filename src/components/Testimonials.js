import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Working with Om was an absolute pleasure. His attention to detail and creativity blew us away!",
    author: "Aarav Sharma, CEO - DesignPro",
  },
  {
    text: "Super professional and very dedicated. He delivered our portfolio site before the deadline!",
    author: "Priya Verma, Freelancer",
  },
  {
    text: "One of the most talented developers I’ve met. Highly recommended for any web project.",
    author: "Neha Kapoor, UI/UX Designer",
  },
];

const Testimonials = ({ darkMode }) => {
  return (
    <section className={`testimonial-section ${darkMode ? "dark" : ""}`}>
      <h2 className="testimonial-title">What People Say</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="testimonial-text">“{item.text}”</p>
            <p className="testimonial-author">— {item.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
