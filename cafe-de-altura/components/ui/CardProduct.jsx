"use client";
import React from 'react';
import { useCart } from '@/context/ProductContext';

export default function Cards({ products }) {
  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img 
            src={product.img_url} 
            alt={product.brand} 
            className="w-full h-48 object-cover rounded-t-lg" 
          />
          <h2 className="text-lg font-semibold mt-2 text-black text-center">{product.brand}</h2>
          <p className="text-gray-600 text-center">
            €{typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
          </p>
          <button 
            className={`text-black mt-2 px-4 py-2 rounded ${product.available ? 'bg-green-500' : 'bg-red-500'}`}
            disabled={!product.available}
            onClick={() => product.available && handleAddToCart(product)}
          >
            {product.available ? 'Añadir' : 'Agotado'}
          </button>
        </div>
      ))}
    </div>
  );
}
