"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Success = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleBackToStore = () => {
    localStorage.removeItem('cart'); 
    window.location.href = '/shop'; 
  };

  const subtotal = cart.reduce((total, product) => total + (product.price || 0), 0);
  const shippingCost = 0.00; 
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center text-black">
    <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col items-center">
        <Image src={`/clipboard.svg`} alt="Check icon" width={64} height={64} />
          <h2 className="text-[#2A5B45] text-lg mt-4 font-medium">
            El pedido ha sido realizado con éxito
          </h2>
          <p className="font-normal text-[14px] leading-[16px] mt-4 mx-auto w-full max-w-md">
            El pedido #12387 se encuentra en preparación. 
            Lo recibirás dentro de las fechas acordadas en tu envío. 
            Hemos enviado un ticket a tu correo electrónico.
          </p>
        </div>
        
        {/* Cart Summary Section */}
        <div className="lg:w-1/2 w-full mt-8">
          <div className="p-6 bg-[#F7F5F3] h-[391px] w-[1200px]">
            <h3 className="text-lg font-semibold flex flex-initial">Tu pedido</h3>
            <hr />
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
            <hr />
            <div className="flex justify-between mt-6">
              <span className="text-lg font-semibold">TOTAL</span>
              <span className="text-lg font-semibold">€{total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500 mt-6 flex justify-end">Incluye 3,78€ de IVA</p>
          </div>
        </div>
        
        <div className="mt-8">
          <button 
            onClick={handleBackToStore} 
            className="bg-[#2A5B45] text-white text-sm py-2 px-4 rounded-lg"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
