import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-text">
        Welcome to <strong>Our Company</strong>, where innovation meets excellence. 
        We are committed to providing top-notch solutions that empower businesses 
        and individuals worldwide.
      </p>

      {/* Image Section */}
      <div className="about-image-container">
        <img src="/images/about.jpeg" alt="About Us" className="about-image" />
      </div>

      <div className="about-section">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality products and services that drive success 
            and create a lasting impact in the industry.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in our field by constantly innovating and 
            exceeding customer expectations.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <p>
            ✔ Cutting-edge technology  
            ✔ Customer-centric approach  
            ✔ Proven expertise & experience  
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;