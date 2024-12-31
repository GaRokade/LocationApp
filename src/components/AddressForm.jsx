import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

const AddressForm = ({ confirmedLocation, onSaveAddress }) => {
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [label, setLabel] = useState("");

  const handleSave = () => {
    if (!house || !apartment || !label) {
      alert("Please fill in all fields and select a label.");
      return;
    }

    const addressDetails = {
      house,
      apartment,
      label,
      confirmedLocation,
    };
    onSaveAddress(addressDetails);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Delivery Address
      </Typography>
      <TextField
        label="House / Flat / Block No."
        fullWidth
        margin="normal"
        variant="outlined"
        value={house}
        onChange={(e) => setHouse(e.target.value)}
      />
      <TextField
        label="Apartment / Road / Area"
        fullWidth
        margin="normal"
        variant="outlined"
        value={apartment}
        onChange={(e) => setApartment(e.target.value)}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Save Address As:
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {["Home", "Office", "Friends & Family"].map((type) => (
          <Grid item key={type}>
            <Button
              variant={label === type ? "contained" : "outlined"}
              onClick={() => setLabel(type)}
            >
              {type}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSave}
      >
        Save Address
      </Button>
    </Box>
  );
};

export default AddressForm;
