"use client";
import React from 'react';

export default function Cards({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img 
            src={product.img_url} 
            alt={product.brand} 
            className="w-full h-48 object-cover rounded-t-lg" 
          />
          <h2 className="text-lg font-semibold mt-2">{product.brand}</h2>
          <p className="text-gray-600">
            ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
          </p>
          <p className={`text-sm mt-2 ${product.available ? 'text-green-500' : 'text-red-500'}`}>
            {product.available ? 'Available' : 'Not Available'}
          </p>
        </div>
      ))}
    </div>
  );
}
