import React from "react";
import "./FeatureCard.css"; // Add styles

const FeatureCard = () => {
  return (
    <div className="feature-card">
      {/* Left content */}
      <div className="feature-text">
        <h2>Luxury Apartments</h2>
        <p>
          Situated in prestigious and desirable locations, offering breathtaking views, 
          proximity to upscale neighborhoods, and convenient access to amenities such as 
          shopping, dining, and cultural attractions.
        </p>
        <ul>
          <li>✔ Designer Finishes</li>
          <li>✔ Spacious Layouts</li>
        </ul>
        <button className="explore-button">Explore Apartments</button>
      </div>

      {/* Right image/illustration */}
      <div className="feature-image"></div>
    </div>
  );
};

export default FeatureCard;
