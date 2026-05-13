import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Oba Melody</h3>
            <p>Creative Artist | Tech Educator | Digital Creator</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Music & Performance</a>
                </li>
                <li>
                  <a href="#services">Graphic Design</a>
                </li>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Tech Training</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  📘
                </a>
                <a href="#" className="social-icon">
                  📺
                </a>
                <a href="#" className="social-icon">
                  💼
                </a>
                <a href="#" className="social-icon">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Oba Melody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
