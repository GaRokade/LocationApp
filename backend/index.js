const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let addresses = []; // Array to store addresses in memory

// Route to save a new address
app.post("/api/address", (req, res) => {
  const { location, additionalInfo, label } = req.body;

  if (!location || !additionalInfo || !label) {
    return res.status(400).json({ message: "Invalid address data!" });
  }

  // Create a new address object
  const newAddress = {
    id: addresses.length + 1, // Unique ID for each address
    location,
    additionalInfo,
    label, // 'Home', 'Office', etc.
  };

  // Save the address in memory
  addresses.push(newAddress);

  // Return success response
  res
    .status(200)
    .json({ message: "Address saved successfully!", address: newAddress });
});

// Route to get all saved addresses
app.get("/api/address", (req, res) => {
  res.status(200).json(addresses);
});

// Route to update an address by ID
app.put("/api/address/:id", (req, res) => {
  const { id } = req.params;
  const { location, additionalInfo, label } = req.body;

  const address = addresses.find((addr) => addr.id === parseInt(id));

  if (!address) {
    return res.status(404).json({ message: "Address not found!" });
  }

  // Update address details
  address.location = location || address.location;
  address.additionalInfo = additionalInfo || address.additionalInfo;
  address.label = label || address.label;

  res.status(200).json({ message: "Address updated successfully!", address });
});

// Route to delete an address by ID
app.delete("/api/address/:id", (req, res) => {
  const { id } = req.params;

  const index = addresses.findIndex((addr) => addr.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Address not found!" });
  }

  // Delete the address from the array
  addresses.splice(index, 1);

  res.status(200).json({ message: "Address deleted successfully!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
