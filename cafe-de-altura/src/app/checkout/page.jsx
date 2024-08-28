"use client";
import React, { useEffect, useState } from 'react';
import CountrySelect from '../../../components/CountrySelect';
import Link from 'next/link';
import PaymentForm from '../../../components/PaymentForm';

const CheckoutPage = () => {
  const [cartSummary, setCartSummary] = useState({
    subtotal: '0.00',
    shippingCost: '0.00',
    total: '0.00',
  });

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    poblacion: '',
    cp: '',
    calle: '',
    numero: '',
    piso: '',
    puerta: '',
    fechaCaducidad: '',
    titular: '',
    numeroTarjeta: '',
    cvc: '',
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const savedSummary = JSON.parse(localStorage.getItem('cartSummary')) || {};
    setCartSummary(savedSummary);
  }, []);

  useEffect(() => {
    const isComplete = Object.values(formData).every(field => field.trim() !== '');
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen py-8 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-green-900 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Form */}
          <div className="lg:w-3/4 w-full lg:pr-8">
            <PaymentForm />

            {/* Address Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Dirección de envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">Apellidos</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    placeholder="Apellidos"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
                  <CountrySelect />
                </div>
                <div className="relative">
                  <label htmlFor="poblacion" className="block text-sm font-medium text-gray-700">Población</label>
                  <input
                    type="text"
                    id="poblacion"
                    name="poblacion"
                    placeholder="Población"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.poblacion}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="cp" className="block text-sm font-medium text-gray-700">CP</label>
                  <input
                    type="text"
                    id="cp"
                    name="cp"
                    placeholder="CP"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.cp}
                    onChange={handleChange}
                  />
                </div>

                {/* Flex Container for Calle, Número, Piso, and Puerta */}
                <div className="flex gap-1">
                  <div className="flex-1">
                    <label htmlFor="calle" className="block text-sm font-medium text-gray-700">Calle</label>
                    <input
                      type="text"
                      id="calle"
                      name="calle"
                      placeholder="Calle"
                      className="w-[112.25px] h-[36px] p-[10px] border border-gray-300 rounded-tl-lg border-b-0 border-r-0 border-l-0 border-t text-black opacity-100"
                      value={formData.calle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      placeholder="Nº"
                      className="w-[112.25px] h-[36px] p-[10px] border border-gray-300 border-b-0 border-r-0 border-l-0 border-t text-black opacity-100"
                      value={formData.numero}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="piso" className="block text-sm font-medium text-gray-700">Piso</label>
                    <input
                      type="text"
                      id="piso"
                      name="piso"
                      placeholder="Piso"
                      className="w-[112.25px] h-[36px] p-[10px] border border-gray-300 border-b-0 border-r-0 border-l-0 border-t text-black opacity-100"
                      value={formData.piso}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="puerta" className="block text-sm font-medium text-gray-700">Puerta</label>
                    <input
                      type="text"
                      id="puerta"
                      name="puerta"
                      placeholder="Puerta"
                      className="w-[112.25px] h-[36px] p-[10px] border border-gray-300 border-b-0 border-r-0 border-l-0 border-t text-black opacity-100"
                      value={formData.puerta}
                      onChange={handleChange}
                    />
                  </div>
                </div>
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
              <Link
                href={isFormComplete ? "/success" : "#"}
                className={`bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg ${
                  !isFormComplete ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                }`}
              >
                Pagar y realizar pedido
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
