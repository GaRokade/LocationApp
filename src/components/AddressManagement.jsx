import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddressManagement = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const navigate = useNavigate();

  // Fetch saved addresses from the backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/address") // Endpoint to fetch saved addresses
      .then((response) => {
        setSavedAddresses(response.data); // Set the fetched addresses
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const handleDelete = (id) => {
    // Send request to delete address
    axios
      .delete(`http://localhost:5000/api/address/${id}`)
      .then(() => {
        alert("Address deleted successfully!");
        // Refresh the saved addresses list after deletion
        setSavedAddresses((prevAddresses) =>
          prevAddresses.filter((address) => address.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting address:", error));
  };

  const handleEdit = (id) => {
    // Navigate to the address editing page with the selected address id
    navigate(`/address/edit/${id}`);
  };

  return (
    <div>
      <h2>Manage Addresses</h2>
      <div>
        <h3>Saved Addresses</h3>
        {savedAddresses.length === 0 ? (
          <p>No saved addresses found.</p>
        ) : (
          <ul>
            {savedAddresses.map((address) => (
              <li key={address.id}>
                <h4>{address.name}</h4>
                <p>{address.address}</p>
                <p>{address.location}</p>
                <button onClick={() => handleEdit(address.id)}>Edit</button>
                <button onClick={() => handleDelete(address.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddressManagement;
