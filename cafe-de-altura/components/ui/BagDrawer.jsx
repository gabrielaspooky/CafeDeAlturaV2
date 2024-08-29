"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Buttons from "./Buttons";

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
        <h1 className="text-2xl font-semibold text-center text-[#2A5B45] mb-8">
          Cesta ({totalUnits})
        </h1>

        {/* Productos */}
        <div className="flex flex-col">
          {cart.length === 0 ? (
            <p className="text-center text-black">Tu carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div key={product._id} className="flex items-start mb-4 gap-2">
                <Image
                  src={product.img_url}
                  alt={product.brand}
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <div className="flex-grow">
                  <span className="block text-lg text-black truncate">{product.brand}</span>
                  <span className="block text-black">Unidades: {parseInt(product.quantity) || 1}</span>
                  <hr className="mt-2"/>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="flex justify-center items-center mb-4 gap-2">
            <Buttons text={"Ir al checkout"} typeBtn={"primary"} href="/shoppingBag" />
          </div>
        )}

      </div>
    </div>
  );
};

export default ShoppingBagDrawer;
