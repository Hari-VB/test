import React, { useState } from "react";
import "./SearchSection.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchSection = () => {
  const [mapView, setMapView] = useState(false);

  return (
    <div className="search-container">
      {/* Buy & Rent Toggle Buttons */}
      <div className="toggle-buttons">
        <button className="toggle-btn">Buy</button>
        <button className="toggle-btn active">Rent</button>
      </div>

      {/* Search Input */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search property" />
        <button className="location-btn">
          <FaMapMarkerAlt />
        </button>
      </div>

      {/* Price Dropdown */}
      <div className="dropdown">
        <select>
          <option>Price</option>
          <option>$100,000 - $500,000</option>
          <option>$500,000 - $1,000,000</option>
        </select>
      </div>

      {/* Find Button */}
      <button className="find-btn">Find</button>

      {/* Listings & Filters Section */}
      <div className="listings-filter-section">
        <div className="listings-info">
          <h2>Properties for rent in United Arab Emirates</h2>
          <p>10 listings</p>
        </div>

        <div className="filter-options">
          <div className="map-view-toggle">
            <label>
              Map View
              <input type="checkbox" checked={mapView} onChange={() => setMapView(!mapView)} />
              <span className="slider"></span>
            </label>
          </div>
          
          <div className="sort-dropdown">
            <select>
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
