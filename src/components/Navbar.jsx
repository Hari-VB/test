import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="brand">ABC</span> PROPERTIES
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#">Buy</a>
        <a href="#" className="rent">Rent</a>
        <span className="divider"></span>
        <a href="#">Navigator's Edge</a>
        <a href="#">Our Agents</a>
        <a href="#">Blogs & Insights</a>
        <a href="#">New Launches</a>
        <a href="#">About us</a>
        <a href="#">Help & Support</a>
        <button className="sell-btn">Sell Property</button>
      </nav>
    </header>
  );
};

export default Navbar;
