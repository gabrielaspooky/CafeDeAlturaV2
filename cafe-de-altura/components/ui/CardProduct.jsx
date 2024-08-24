"use client";
import React, { useEffect, useState } from 'react';

export function Cards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://cafe-de-altura-alpha.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Asume que la respuesta tiene una propiedad 'products'
        setProducts(data.products || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="card border rounded-lg p-4 shadow-md">
          <img src={product.img_url} alt={product.brand} className="w-full h-48 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-bold mb-2">{product.brand}</h2>
          <p className="text-lg font-semibold mb-2">${product.price}</p>
          <p className={`text-sm ${product.available ? 'text-green-600' : 'text-red-600'}`}>
            {product.available ? 'Available' : 'Not Available'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;


