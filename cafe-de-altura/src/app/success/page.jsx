"use client";
import React, { useEffect, useState } from 'react';
import { ClipboardCheck } from "lucide-react";
import Link from "next/link";
import CopyrightFooter from '../../../components/ui/CopyrightFooter';

const Success = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Leer el carrito desde localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Función para limpiar el localStorage y redirigir
  const handleBackToStore = () => {
    localStorage.removeItem('cart'); // Limpiar el carrito del localStorage
    window.location.href = '/shop'; // Redirigir al usuario a la tienda
  };

  // Calcula el subtotal y total
  const subtotal = cart.reduce((total, product) => total + (product.price || 0), 0);
  const shippingCost = 0.00; // Assuming free shipping as shown in your image
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white min-h-screen py-8 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ClipboardCheck className="mx-auto h-16 w-16 text-green-600" />
          <p className="text-lg font-semibold mt-4">
            El pedido #12387 se encuentra en preparación. 
            Lo recibirás dentro de las fechas acordadas en tu envío. 
            Hemos enviado un ticket a tu correo electrónico.
          </p>
        </div>
        
        {/* Cart Summary Section */}
        <div className="lg:w-1/2 w-full mx-auto mt-8">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="text-lg font-semibold mb-6">Resumen del pedido</h3>
            {cart.map((product, index) => (
              <div key={index} className="flex justify-between mb-4">
                <div className="flex items-center">
                  <img 
                    src={product.img_url} 
                    alt={product.brand} 
                    width={50} 
                    height={50} 
                    className="mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.brand}</p>
                    <p className="text-sm text-gray-500">Paquete de café, 250 gr</p>
                  </div>
                </div>
                <p className="font-semibold">€{product.price.toFixed(2)}</p>
              </div>
            ))}
            
            <div className="flex justify-between mt-6">
              <span className="text-sm">SUBTOTAL</span>
              <span className="text-sm font-semibold">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-sm">ENVÍO</span>
              <span className="text-sm font-semibold">GRATIS</span>
            </div>
            <div className="flex justify-between mt-6">
              <span className="text-lg font-semibold">TOTAL</span>
              <span className="text-lg font-semibold">€{total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500 mt-6">Incluye IVA</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={handleBackToStore} 
            className="bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg"
          >
            Volver a la tienda
          </button>
          <CopyrightFooter />
        </div>
      </div>
    </div>
  );
};

export default Success;
