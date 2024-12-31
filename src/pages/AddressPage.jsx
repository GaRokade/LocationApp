import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import axios from "axios";


const AddressPage = () => {
  const location = useLocation(); // Accessing passed location state
  const navigate = useNavigate();

  const handleSaveAddress = (addressDetails) => {
    const confirmedLocation = location?.state?.location || null; // Fallback if location isn't passed

    const fullAddress = {
      ...addressDetails,
      location: confirmedLocation,
    };

    // Save the address to the backend
    axios
      .post("http://localhost:5000/api/address", fullAddress)
      .then(() => {
        alert("Address saved successfully!");
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => console.error("Error saving address:", error));
  };

  // Handle navigation to the Location Manager page
  const handleLocationManager = () => {
    navigate("/location-manager"); // Navigate to the LocationManager page
  };

  return (
    <div>
      
      <AddressForm
        confirmedLocation={location?.state?.location} // Pass location as a prop
        onSaveAddress={handleSaveAddress} // Save handler
      />

      {/* Button to navigate to LocationManager */}
      <div>
        <button onClick={handleLocationManager} style={{height:'30px',backgroundColor:'red', border:'2px solid black ',borderRadius:'10px', alignItems:'center',justifyContent:'center'}}>Manage Locations</button>
      </div>
    </div>
  );
};

export default AddressPage;
