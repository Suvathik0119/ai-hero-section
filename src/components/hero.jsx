import React, { useState } from "react";
import "./style.css";
import heroBg from "../assets/hero_bg.mp4";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-section">
      <div className="video-background">
        <video autoPlay muted loop id="hero-video">
          <source src={heroBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <nav className="navbar">
        <div className="nav-logo">Nexa AI</div>
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>
          <li>Services</li>
          <li>About us</li>
          <li>Careers</li>
          <li>News</li>
          <li>Contact us</li>
          <button className="contact-button">Let's Talk</button>
        </ul>
        
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">
          Nexa AI Solutions <br />
          <span>Craft Your Intelligence</span>
        </h1>
        <p className="highlight-text">
          Solve your tasks and speed up processes by <span>60%</span>
        </p>
        <div className="services-list">
          <button className="service-item">Customer Support Chatbots</button>
          <button className="service-item">
            Internal Document Search Systems
          </button>
          <button className="service-item">Development of AI Applications</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
