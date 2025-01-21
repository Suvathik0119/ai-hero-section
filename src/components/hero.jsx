import React from "react";
import "./style.css";
import heroBg from '../Assets/hero_bg.mp4'; // Ensure this CSS file is correctly linked

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="video-background">
        <video autoPlay muted loop id="hero-video">
          <source src={heroBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <nav className="navbar">
        <ul>
          <li>Services</li>
          <li>About us</li>
          <li>Careers</li>
          <li>News</li>
          <li>Contact us</li>
        </ul>
        <button className="contact-button">Let's Talk</button>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">
          Nexa AI Solutions <br />
          <span>Craft Your Intelligence</span>
        </h1>
        <div className="services-list">
          <button className="service-item">Customer Support Chatbots</button>
          <button className="service-item">Internal Document Search Systems</button>
          <button className="service-item">Development of AI Applications</button>
        </div>
        <p className="highlight-text">
          Solve your tasks and speed up processes by <span>60%</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
