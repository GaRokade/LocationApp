import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage"; // Import the AuthPage if you need navigation to the login page
import MapPage from "./pages/MapPage";
import AddressPage from "./pages/AddressPage";
import AddressManagement from "./components/AddressManagement";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import LocationManager from "./pages/LocationManager";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* HomePage is the default page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />{" "}
        {/* Login/Register Page */}
        <Route path="/map" element={<MapPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/manage-addresses" element={<AddressManagement />} />
        <Route path="/location-manager" element={<LocationManager />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
