import React from "react";
import MapSelection from "../components/MapSelection";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    console.log("Selected location:", location);
    navigate("/address", { state: { location } });
  };

  return <MapSelection onLocationSelect={handleLocationSelect} />;
};

export default MapPage;

