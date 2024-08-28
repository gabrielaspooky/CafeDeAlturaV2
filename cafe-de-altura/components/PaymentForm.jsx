import React, { useState } from "react";

const PaymentForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRadioChange = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="lg:w-3/4 w-full">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Seleccionar método de pago</h2>

        <div className="border-b border-gray-300 py-4">
          <label className="flex items-center mb-4 cursor-pointer">
            <input
              type="radio"
              name="payment"
              className="form-radio accent-[#2A5B45]"
              onChange={handleRadioChange}
            />
            <span className="ml-2 text-sm font-semibold">Tarjeta de débito</span>
            <span className="ml-2 text-sm text-gray-500">Opción estándar sin seguimiento</span>
          </label>

          {/* Formulario de tarjeta de débito */}
          <div className={`transition-opacity duration-300 ${showForm ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[279px] h-[181px] flex flex-col gap-2">
              <label className="block text-black">
                Titular
                <input
                  type="text"
                  name="titular"
                  placeholder="Nombre del titular"
                  className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black"
                />
              </label>
              <label className="block text-black">
                Número de la tarjeta
                <input
                  type="text"
                  name="numeroTarjeta"
                  placeholder="1234 1234 1234 1234"
                  className="form-input mt-1 block w-full p-2 border border-gray-300 rounded text-black"
                />
              </label>
              <div className="w-[279px] min-h-[55px] flex gap-6">
                <label className="block text-black">
                  Fecha de caducidad
                  <input
                    type="date"
                    name="fechaCaducidad"
                    className="form-input p-2 border border-gray-300 rounded text-black"
                  />
                </label>
                <label className="block text-black">
                  CVC
                  <input
                    type="text"
                    name="cvc"
                    placeholder="123"
                    className="p-2 border border-gray-300 rounded text-black"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

