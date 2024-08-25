"use client"
import React, { useState } from 'react';

const HomeForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    prefijo: '+1', // Agrega `prefijo` al estado
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
    <form onSubmit={handleSubmit} className="space-y-4 w-34 h-33 p-8 bg-white">
      <label className="block text-black">
        Nombre completo:
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded text-black"
        />
      </label>
      <label className="block">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block">
        Teléfono:
        <select
          name="prefijo"
          value={formData.prefijo}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="+1">US</option>
          {/* Agregar más opciones de prefijos según sea necesario */}
        </select>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block">
        ¿En qué podemos ayudarte?
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="aceptaTerminos"
          checked={formData.aceptaTerminos}
          onChange={handleChange}
          className="mr-2"
        />
        Acepto la Política de Privacidad y los Términos y condiciones.
      </label>
      <button type="submit" className="px-4 py-2 bg-[#2A5B45] text-white rounded">Enviar</button>
    </form>
  );
};

export default HomeForm;
