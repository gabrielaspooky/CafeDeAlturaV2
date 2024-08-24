// components/Cards.js
import React, { useEffect, useState } from 'react';

export default function Cards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img src={product.img_url} alt={product.brand} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-lg font-semibold mt-2">{product.brand}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className={`text-sm mt-2 ${product.available ? 'text-green-500' : 'text-red-500'}`}>
            {product.available ? 'Available' : 'Not Available'}
          </p>
        </div>
      ))}
    </div>
  );
}

