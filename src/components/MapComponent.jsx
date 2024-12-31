import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.google || !window.google.maps) {
        console.error("Google Maps API failed to load.");
        return;
      }

      const mapElement = document.getElementById("map");
      if (!mapElement) {
        console.error("Map container element not found.");
        return;
      }

      new window.google.maps.Map(mapElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    loadMap();
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
