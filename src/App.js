import React from "react";
import Navbar from "./components/Navbar";
import PropertyCard from "./components/Card";
import Footer from "./components/Footer";
import properties from "./data/properties";
import SearchSection from "./components/SearchSection";
import Sidebar from "./components/Sidebar";
import FeatureCard from "./components/FeatureCard";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <SearchSection />

      {/* Main content container with sidebar */}
      <div className="main-container">
        {/* Property List */}
        <div className="property-list-container">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Sidebar on the right */}
        <Sidebar />
      </div>

      {/* Feature Card below property listings and sidebar */}
      <FeatureCard />

      {/* Additional Property Cards Below FeatureCard */}
      <div className="property-page">
  {/* Left Section - Property Listings */}
  <div className="property-list">
    {properties.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </div>

 
</div>


      <Footer />
    </div>
  );
}

export default App;
