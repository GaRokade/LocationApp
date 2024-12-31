import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    // Fetch product details based on the product ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  // If product is loading or not found
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="product-details max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
          {/* Product Info */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <span className="text-lg font-semibold text-gray-900">Price: ₹ {product.price}</span>
            <div className="mt-6">
            <button className="btn btn-warning">Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
