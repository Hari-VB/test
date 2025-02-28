import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="sidebar">
      <h3>Filter <span className="filter-icon">🔍</span></h3>

      {/* Toggle Options */}
      <div className="filter-section">
        <label className="toggle-option">
          <span>Mark already seen</span>
          <input type="checkbox" />
        </label>
        <label className="toggle-option">
          <span>Properties with photos</span>
          <input type="checkbox" />
        </label>
      </div>

      {/* Dynamic Dropdown Sections */}
      {[
        { title: "Completion Status", options: ["Ready", "Off-Plan"], type: "radio", name: "completion" },
        { title: "Property Type", options: ["Premium", "Apartments", "Ready to move", "Individual Homes", "Townhouse", "Penthouse"] },
        { title: "Furnished Status", options: ["Furnished", "Semi-Furnished", "Un-Furnished"] },
        { title: "Amenities", options: ["Parking facility", "Security", "Gas Pipeline", "Lift Facility", "Power backup"] },
        { title: "BHK Facility", options: ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Studio"] },
        { title: "Bathrooms", options: ["1", "2", "3+"] },
      ].map((section) => (
        <div className="filter-section" key={section.title}>
          <h4 onClick={() => toggleSection(section.title)} className="dropdown-toggle">
            {section.title} {openSections[section.title] ? "▼" : "▶"}
          </h4>
          {openSections[section.title] && (
            <div className="dropdown-content">
              {section.options.map((option, index) => (
                <label key={index}>
                  <input 
                    type={section.type === "radio" ? "radio" : "checkbox"} 
                    name={section.name || option} 
                  /> {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
