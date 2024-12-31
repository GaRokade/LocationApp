import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Box, Button, Typography } from "@mui/material";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const MapSelection = ({ onLocationSelect }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,  // Import from .env
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
    </Box>
  );
};

export default MapSelection;
