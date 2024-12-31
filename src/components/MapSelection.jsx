import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Box, Button, Typography } from "@mui/material";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const MapSelection = ({ onLocationSelect }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAhaEqJHyuSFlQAQ_iJfWKlaF8EUBeAgK0",
  });

  const [selectedPosition, setSelectedPosition] = useState({
    lat: 19.076,
    lng: 72.8777,
  });
  const [address, setAddress] = useState("");

  const handleMapClick = (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedPosition(position);
    fetchAddress(position);
  };

  const fetchAddress = async ({ lat, lng }) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    }
  };

  const handleShareLocation = () => {
    const shareURL = `https://www.google.com/maps?q=${selectedPosition.lat},${selectedPosition.lng}`;
    navigator.clipboard.writeText(shareURL);
    alert("Location URL copied to clipboard!");
  };

  if (!isLoaded) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ textAlign: "center" }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={selectedPosition}
        zoom={15}
        onClick={handleMapClick}
      >
        <Marker position={selectedPosition} />
      </GoogleMap>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Selected Address: {address}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onLocationSelect(selectedPosition)}
        sx={{ mt: 2 }}
      >
        Confirm Location
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleShareLocation}
        sx={{ mt: 2, ml: 2 }}
      >
        Share Location
      </Button>
    </Box>
  );
};

export default MapSelection;


// AIzaSyAhaEqJHyuSFlQAQ_iJfWKlaF8EUBeAgK0