import React, { useState, useEffect } from 'react';
import './LocationManager.css'; // Styles for the UI

const LocationManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [savedLocations, setSavedLocations] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock saved locations and recent searches
    const fetchData = async () => {
      setSavedLocations([
        { id: 1, name: "Home", address: "Chembur Colony, Mumbai, Maharashtra" },
        { id: 2, name: "Office", address: "Chembur Colony, Mumbai, Maharashtra" },
        { id: 3, name: "Friends & Family", address: "Chembur Colony, Mumbai, Maharashtra" }
      ]);
      setRecentSearches([
        { id: 4, name: "Wadala West", address: "Chembur Colony, Mumbai, Maharashtra" },
        { id: 5, name: "Chembur East", address: "Chembur Colony, Mumbai, Maharashtra" },
        { id: 6, name: "Wadala East", address: "Chembur Colony, Mumbai, Maharashtra" }
      ]);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="location-manager">
      <header className="header">
        <h1>Your Location</h1>
        <input
          type="text"
          placeholder="Search your area/pincode/apartment"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>

      <div className="location-options">
        <h3>Current Location</h3>
        <button className="enable-btn">Enable</button>
      </div>

      <section className="saved-locations">
        <h3>Saved Locations</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          savedLocations.map((loc) => (
            <div
              key={loc.id}
              className="location-item"
              onClick={() => handleSelectLocation(loc)}
            >
              <strong>{loc.name}</strong>
              <p>{loc.address}</p>
            </div>
          ))
        )}
      </section>

      <section className="recent-searches">
        <h3>Recent Searches</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          recentSearches.map((loc) => (
            <div
              key={loc.id}
              className="location-item"
              onClick={() => handleSelectLocation(loc)}
            >
              <strong>{loc.name}</strong>
              <p>{loc.address}</p>
            </div>
          ))
        )}
      </section>

      {selectedLocation && (
        <div className="selected-location">
          <h3>Selected Location</h3>
          <p>{selectedLocation.name} - {selectedLocation.address}</p>
        </div>
      )}
    </div>
  );
};

export default LocationManager;
