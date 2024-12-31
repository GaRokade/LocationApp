import React from "react";

const Product = ({ product, onProductClick }) => {
  return (
    <div
      style={{ height: "400px", width: "300px" }}
      onClick={() => onProductClick(product.id)} // Call the onProductClick function
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-cover"
        style={{ height: "250px" }}
      />
      <div className="text-center">
        <h4 className="text-lg font-bold py-2">{product.title}</h4>
        <span className="bg-gray-200 py-1 rounded-full px-4 text-sm">
          {product.category}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">₹ {product.price}</span>
        <button className="bg-yellow-500 py-1 px-4 font-bold rounded-full">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
