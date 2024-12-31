import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationPermissionModal = ({ onEnableLocation, onManualSearch }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        borderRadius: "12px",
        boxShadow: 3,
        backgroundColor: "#fff",
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <LocationOnIcon sx={{ fontSize: 50, color: "red", mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Location Permission is Off
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        We need your location to find the nearest store & provide a seamless
        delivery experience.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onEnableLocation}
        sx={{ mt: 2 }}
      >
        Enable Location
      </Button>
      <Button
        variant="outlined"
        fullWidth
        onClick={onManualSearch}
        sx={{ mt: 1 }}
      >
        Search Location Manually
      </Button>
    </Box>
  );
};

export default LocationPermissionModal;
