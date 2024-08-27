"use client"
import React, { useEffect, useState } from 'react';
import CountrySelect from '../../../components/CountrySelect';
import Link from 'next/link';

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
                    <input
                      type="text"
                      name="titular"
                      placeholder="Nombre del titular"
                      className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black"
                      value={formData.titular}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block text-black">
                    Número de la tarjeta
                    <input
                      type="text"
                      name="numeroTarjeta"
                      placeholder="1234 1234 1234 1234"
                      className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black"
                      value={formData.numeroTarjeta}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="w-[279px] min-h-[55px] flex gap-6">
                    <label className="block text-black">
                      Fecha de caducidad
                      <input
                        type="date"
                        name="fechaCaducidad"
                        className="form-input p-2 border border-gray-300 rounded text-black"
                        value={formData.fechaCaducidad}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="block text-black">
                      CVC
                      <input
                        type="text"
                        name="cvc"
                        placeholder="123"
                        className="p-2 border border-gray-300 rounded text-black"
                        value={formData.cvc}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Otra sección de pago y dirección de envío */}
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Dirección de envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <CountrySelect />
                  <input
                    type="text"
                    name="poblacion"
                    placeholder="Población"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.poblacion}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cp"
                    placeholder="CP"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.cp}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="calle"
                    placeholder="Calle"
                    className="w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.calle}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="numero"
                    placeholder="Nº"
                    className="w-full mt-1 p-2 border border-gray-300 rounded text-black"
                    value={formData.numero}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="piso"
                    placeholder="Piso"
                    className="p-2 border border-gray-300 rounded text-black"
                    value={formData.piso}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="puerta"
                    placeholder="Puerta"
                    className="p-2 border border-gray-300 rounded text-black"
                    value={formData.puerta}
                    onChange={handleChange}
                  />
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
