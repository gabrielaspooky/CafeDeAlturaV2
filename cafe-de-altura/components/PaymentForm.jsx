import Image from 'next/image';
import React, { useState } from 'react';

const PaymentForm = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (method) => {
    setSelectedMethod(prevMethod => (prevMethod === method ? '' : method));
  };

  return (
    <div className="lg:w-3/4 w-full">
      <h2 className="text-lg font-semibold mb-4">Seleccionar método de pago</h2>

      {/* Card Payment Option */}
      <div className="mb-8">
        <div className="border-b border-gray-300 py-4">
          <label className="flex items-center mb-4 cursor-pointer">
            <input
              type="radio"
              name="payment"
              className="form-radio accent-[#2A5B45]"
              checked={selectedMethod === 'card'}
              onChange={() => handleMethodChange('card')}
            />
            <span className="ml-2 text-sm font-semibold">Tarjeta de débito</span>
          </label>
          <div className={`h-[181] w-[279] transition-max-height duration-500 ease-in-out ${selectedMethod === 'card' ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            {selectedMethod === 'card' && (
              <div className="w-[279px] h-[181px] flex flex-col gap-2 ml-6">
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
            )}
          </div>
        </div>
      </div>

      {/* Bank Transfer Option */}
      <div className="mb-8">
        <div className="border-b border-gray-300 py-4">
          <label className="flex items-center mb-4 cursor-pointer">
            <input 
              type="radio" 
              name="payment"
              className="form-radio accent-[#2A5B45]"
              checked={selectedMethod === 'bank'} 
              onChange={() => handleMethodChange('bank')} 
            />
            <span className="ml-2 text-sm font-semibold">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</span>
          </label>
          <div className={`transition-max-height duration-500 ease-in-out ${selectedMethod === 'bank' ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
            {selectedMethod === 'bank' && (
              <p className="ml-6 text-sm text-gray-500">
                Será necesario recibir el comprobante de la transferencia para preparar tu pedido.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bizum Payment Option */}
      <div className="mb-8">
        <div className="border-b border-gray-300 py-4">
          <label className="flex items-center mb-4 cursor-pointer">
            <input 
              type="radio" 
              name="payment"
              className="form-radio accent-[#2A5B45]"
              checked={selectedMethod === 'bizum'} 
              onChange={() => handleMethodChange('bizum')} 
            />
            <span className="ml-2 text-sm font-semibold">Bizum</span>
            <Image src={`/bizumlogo.png`} alt="Bizum logo" width={64} height={64} />
          </label>

        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
