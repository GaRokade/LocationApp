import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapWrapper = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAhaEqJHyuSFlQAQ_iJfWKlaF8EUBeAgK0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
};

export default GoogleMapWrapper;
