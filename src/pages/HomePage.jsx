import React, { useState } from "react";
import LocationPermissionModal from "../components/LocationPermissionModal";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleEnableLocation = () => {
    setShowModal(false);
    navigate("/map"); // Navigate to the MapPage
  };

  const handleManualSearch = () => {
    setShowModal(false);
    navigate("/address"); // Navigate to the AddressPage
  };

  return (
    <div className="relative">
      {/* Show modal initially */}
      {showModal && (
        <LocationPermissionModal
          onEnableLocation={handleEnableLocation}
          onManualSearch={handleManualSearch}
        />
      )}
      
      {/* Products page in the background */}
      <div className={`transition-opacity duration-500 ${showModal ? "opacity-0" : "opacity-100"}`}>
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
