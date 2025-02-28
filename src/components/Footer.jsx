import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
<div className="bottom-section">
  {/* Pagination */}
  <div className="pagination">
    <button>&laquo;</button>
    <button className="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>...</button>
    <button>10</button>
    <button>&raquo;</button>
    <span>Page <strong>1</strong> of 10</span>
  </div>

  {/* Search & Buyer's Guide Section */}
  <div className="search-guide-container">
    <div className="search-section">
      <h3>Still not found?</h3>
      <p>Tell us what you are looking for</p>
      <div className="popular-searches">
        <div className="search-item">
          <span>🏙️</span> <strong>Dubai - Marina</strong>
          <a href="#">View all listings →</a>
        </div>
        <div className="search-item">
          <span>🌆</span> <strong>Downtown area</strong>
          <a href="#">View all listings →</a>
        </div>
      </div>
    </div>
    <div className="buyers-guide">
      <h3>📖 Buyer's Guide</h3>
      <p>The complete guide to locating and purchasing a home in Dubai.</p>
      <button className="download-btn">Download PDF file</button>
    </div>
  </div>

  {/* Footer Section */}
  <footer>
    <div className="footer-content">
      <div className="social-icons">
        <a href="#">📷</a>
        <a href="#">🐦</a>
        <a href="#">🎮</a>
      </div>
      <div className="contact">
        <h4>Get In Touch</h4>
        <p>DAMAC Smart Heights - Dubai, UAE</p>
        <p>📞 +971 52 975 8969</p>
      </div>
      <div className="services">
        <h4>Services</h4>
        <ul>
          <li>Rent Services</li>
          <li>Buy/Sell Property</li>
          <li>Property Lawyers</li>
          <li>Agents</li>
        </ul>
      </div>
      <div className="chat-support">
        <h4>💬 Chat with us</h4>
        <p>We provide accurate information about the homes you are looking for.</p>
        <button className="chat-btn">Chat now</button>
      </div>
    </div>
    <div className="footer-bottom">
      <p>About us | Terms & Conditions | Privacy Policy</p>
      <select>
        <option>Choose</option>
        <option>Dubai</option>
        <option>Bahrain</option>
        <option>USA</option>
        <option>UK</option>
      </select>
    </div>
  </footer>
</div>
    </footer>
  );
};

export default Footer;
