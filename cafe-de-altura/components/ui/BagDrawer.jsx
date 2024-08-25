"use client"
import React, { useState } from 'react';
import { useCart } from "../../src/context/CartContext" // Ajusta la ruta según la ubicación de tu archivo
import Link from 'next/link';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const ShoppingBagDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="relative z-40">
      {/* Shopping Bag Icon */}
      <div 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link href="/shoppingBag">
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div 
          className="absolute right-0 top-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h3 className="text-lg font-semibold mb-2 text-black">Tu carrito</h3>
          {cart.length > 0 ? (
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="flex items-center justify-between mb-2">
                  <span>{product.brand}</span>
                  <span>€{product.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No tienes productos en tu carrito.</p>
          )}
          <Link href="/shoppingBag">
            <button className="mt-4 px-4 py-2 text-black flex items-center">
              <ShoppingCart size={40} strokeWidth={1.25} />
              <span className="ml-2">Ver carrito</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagDrawer;
