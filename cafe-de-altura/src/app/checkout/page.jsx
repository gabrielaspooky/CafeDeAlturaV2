"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CountrySelect from '../../../components/CountrySelect';

const CheckoutPage = () => {
  const [cartSummary, setCartSummary] = useState({
    subtotal: '0.00',
    shippingCost: '0.00',
    total: '0.00'
  });

  useEffect(() => {
    // Leer el resumen del carrito desde localStorage
    const savedSummary = JSON.parse(localStorage.getItem('cartSummary')) || {};
    setCartSummary(savedSummary);
  }, []);

  return (
    <div className="bg-white min-h-screen py-8 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-green-900 mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row justify-between">
          
          {/* Left Section - Payment and Shipping */}
          <div className="lg:w-3/4 w-full">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Seleccionar método de pago</h2>
              
              <div className="border-b border-gray-300 py-4">
                <label className="flex items-center mb-4">
                  <input type="radio" name="payment" className="form-radio accent-[#2A5B45]" />
                  <span className="ml-2 text-sm font-semibold block">Tarjeta de débito</span>
                  <span className="ml-2 text-sm text-gray-500 block">Opción estándar sin seguimiento</span>
                </label>
                <div className="w-[279px] h-[181px] flex flex-col gap-2">
                <label className="block text-black">
                Titular
                  <input type="text" placeholder="Nombre del titular" className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black" />
                  </label>
                  <label className="block text-black">
                Número de la tarjeta
                  <input type="text" placeholder="1234 1234 1234 1234" className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black" />
                  </label>
                  <div className="w-[279px] min-h-[55px] flex gap-6">
                  <label className="block text-black">
                Fecha de caducidad
                  <input type="date" placeholder="Fecha de caducidad" className="form-input p-2 border border-gray-300 rounded text-black" />
                  </label>
                  <label className="block text-black">
                CVC
                  <input type="text" placeholder="123" className="p-2 border border-gray-300 rounded text-black" />
                  </label>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="border-b border-gray-300 py-4">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="form-radio accent-[#2A5B45]" />
                  
                  <b className="ml-2 text-sm font-semibold">
                  Transferencia bancaria a la cuenta ES12 1234 1234 123457890
                  <br />
                  </b>
                </label>
                <p className="text-sm text-gray-500 ml-8">
              Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
              </div>
              
              <div className="py-4">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="form-radio accent-[#2A5B45]" />
                  <span className="ml-2 text-sm font-semibold">Bizum</span>
                  <Image
                    src={`/bizumlogo.png`}
                    alt="Logo de Bizum"
                    height={30}
                    width={69}
                    className="rounded-[20px]"
                  />
                </label>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Dirección de envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Apellidos" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Teléfono" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="email" placeholder="Email" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <CountrySelect />
                <input type="text" placeholder="Población" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="CP" className="block w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Calle" className="w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Nº" className="w-full mt-1 p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Piso" className="p-2 border border-gray-300 rounded text-black" />
                <input type="text" placeholder="Puerta" className="p-2 border border-gray-300 rounded text-black" />
              </div>
            </div>
          </div>
          
          {/* Right Section - Cart Summary */}
          <div className="lg:w-1/4 w-full lg:ml-8 mt-8 lg:mt-0">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-6">Total del carrito</h3>
              <div className="flex justify-between mb-4">
                <span className="text-sm">SUBTOTAL</span>
                <span className="text-sm font-semibold">€{cartSummary.subtotal}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">ENVÍO</span>
                <span className="text-sm font-semibold">€{cartSummary.shippingCost}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">TOTAL</span>
                <span className="text-lg font-semibold">€{cartSummary.total}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Incluye IVA</p>
              <button 
              type='submit'
              href="/success"
              className="w-full bg-green-900 text-white font-semibold py-2 rounded-lg hover:bg-green-800">
                Pagar y realizar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
