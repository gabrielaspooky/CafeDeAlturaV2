"use client";
import React, { useState, useEffect } from 'react';
import Toast from './AddedToast';

export default function Cards({ products }) {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    // Obtén el carrito actual desde el localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica si el producto ya existe en el carrito
    const productIndex = savedCart.findIndex(item => item._id === product._id);

    let updatedCart;
    if (productIndex !== -1) {
      // Si el producto ya existe, actualiza su cantidad
      updatedCart = [...savedCart];
      updatedCart[productIndex].quantity = (updatedCart[productIndex].quantity || 1) + 1;
    } else {
      // Si el producto no existe, agrégalo con cantidad 1
      updatedCart = [...savedCart, { ...product, quantity: 1 }];
    }

    // Actualiza el estado del carrito y localStorage
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Muestra el toast
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
        {products.map((product) => (
          <div 
            key={product._id} 
            className={`p-12 rounded-lg w-[282px] h-[391.39px] border border-[#E3DED7] ${!product.available ? 'opacity-40' : ''} flex flex-col items-center`}
          >
            <img 
              src={product.img_url} 
              alt={product.brand} 
              className="w-[219px] h-[219px] object-cover rounded-t-lg" 
            />
            <h2 className="text-lg font-semibold mt-2 text-black text-center whitespace-nowrap">{product.brand}</h2>
            <p className="text-gray-600 text-center">
              €{typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
            </p>
            <div className="flex justify-center mt-2 w-full">
              <button 
                className={`text-white px-4 py-2 rounded ${product.available ? 'bg-[#2A5B45B2] hover:bg-[#2A5B45]' : 'bg-[#E3DED7]'}`}
                disabled={!product.available}
                onClick={() => product.available && handleAddToCart(product)}
              >
                {product.available ? 'Añadir' : 'Agotado'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toast show={showToast} />
    </>
  );
}
