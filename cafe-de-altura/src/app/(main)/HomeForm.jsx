"use client"
import React, { useState } from 'react';

const HomeForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    prefijo: '+1', 
    mensaje: '',
    aceptaTerminos: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-[588px] h-[552px] p-8 bg-white">
      <label className="block text-[#374151]">
        Nombre completo:
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block text-[#374151]">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-[#374151] focus:outline-none focus:ring focus:ring-[#2A5B45] block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#2A5B45]"
        />
      </label>
      <label className="block text-black">
  Teléfono:
  <div className="flex items-center mt-1 border border-gray-300 rounded focus-within:ring focus-within:ring-[#2A5B45]">
    <select
      name="prefijo"
      value={formData.prefijo}
      onChange={handleChange}
      className="text-[#374151] bg-transparent pl-3 pr-6 py-2 rounded-l border-r border-gray-300 focus:outline-none focus:ring-0"
    >
      <option value="+34">ES</option>
      <option value="+1">US</option>
    </select>
    <input
      type="tel"
      name="telefono"
      value={formData.telefono}
      onChange={handleChange}
      className="text-[#374151] block w-full py-2 pl-3 pr-4 border-none rounded-r focus:outline-none focus:ring-0"
      placeholder="+1 (555) 987-6543"
    />
  </div>
</label>

      <label className="block text-black">
        <textarea
        placeholder='¿En qué podemos ayudarte?'
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="text-[#374151] block mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#2A5B45] w-full"
        />
      </label>
      <label className="block text-[#374151]">
        <input
          type="checkbox"
          name="aceptaTerminos"
          checked={formData.aceptaTerminos}
          onChange={handleChange}
          className="mr-2 accent-[#2A5B45]"
        />
        Acepto la Política de Privacidad y los Términos y condiciones.
      </label>
      <button type="submit" className="px-4 py-2 bg-[#2A5B45] text-white rounded">Enviar</button>
    </form>
  );
};

export default HomeForm;
