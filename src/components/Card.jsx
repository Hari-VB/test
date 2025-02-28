import React from "react";
import "./Card.css";
import { FaBath, FaBed, FaCar, FaCheckCircle, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      {/* Property Image */}
      <div className="property-image-container">
        <img src={property.image} alt={property.title} className="property-image" />
        <div className="overlay">
          <span className="listed-badge">📅 Listed {property.listedDays} days ago</span>
          <span className="verified-badge">✔ Verified by Atharid</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="property-details">
        <div className="top-section">
          <div>
            <h3>{property.title}</h3>
            <p className="price">{property.price} <span>AED YEARLY</span></p>
          </div>

          {/* Contact Buttons */}
          <div className="action-buttons">
            <button className="whatsapp-btn"><FaWhatsapp /> WhatsApp</button>
            <button className="call-btn"><FaPhone /></button>
            <button className="email-btn"><FaEnvelope /></button>
          </div>
        </div>

        <p className="location">{property.location}</p>
        <p className="rent-info">For Rent | {property.status}</p>

        {/* Features */}
        <div className="features">
          <span><FaCheckCircle className="icon" /> Ready to move</span>
          <span><FaCheckCircle className="icon" /> {property.size} sq ft</span>
        </div>

        {/* Property Specifications */}
        <div className="property-specs">
          <span><FaBed className="icon" /> {property.bedrooms} Bedrooms</span>
          <span><FaBath className="icon" /> {property.bathrooms} Bathrooms</span>
          {property.parking && <span><FaCar className="icon" /> Parking available</span>}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
