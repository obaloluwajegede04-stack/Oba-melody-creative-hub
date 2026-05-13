import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Oba Melody</h1>
          <p className="hero-subtitle">
            Creative Artist | Tech Educator | Digital Creator
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("portfolio")}
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/HERO-IMAGE.jpg" alt="Oba Melody" />
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
