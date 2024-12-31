import React, { useState, useEffect } from "react";
import Product from "./Product";
import './Products.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle product click and navigate to ProductDetails
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the ProductDetails page
  };

  return (
    <div className="products-container">
      <h1 className="title">Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              {/* Pass handleProductClick as a prop to Product component */}
              <Product product={product} onProductClick={handleProductClick} />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
