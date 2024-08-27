"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; 

const ShoppingBagDrawer = ({ onClose }) => {
  const [cart, setCart] = useState([]);
  const drawerRef = useRef(null);

  useEffect(() => {
    const fetchCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    };

    fetchCart();

    const handleStorageChange = () => fetchCart();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Calcular el total de unidades en el carrito
  const totalUnits = cart.reduce((sum, product) => sum + (parseInt(product.quantity) || 1), 0);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50">
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 w-80 bg-white shadow-lg p-4 h-full overflow-y-auto"
      >
        <button
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-6 w-6 text-black" />
        </button>
        <h1 className="text-2xl font-semibold text-center text-black mb-8">
          Cesta ({totalUnits})
        </h1>

        {/* Productos */}
        <div className="flex flex-col items-center">
          {cart.length === 0 ? (
            <p className="text-center text-black">Tu carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div key={product._id} className="flex items-center mb-4 gap-2">
                <Image
                  src={product.img_url}
                  alt={product.brand}
                  width={50}
                  height={50}
                />
                <div className="ml-4 flex flex-col">
                  <span className="text-lg text-black">{product.brand}</span>
                  <span className="text-black">Unidades: {parseInt(product.quantity) || 1}</span>
                  <hr />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagDrawer;
