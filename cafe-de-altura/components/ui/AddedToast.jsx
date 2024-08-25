"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Toast = ({ show, duration = 3000 }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-5 bg-[#2A5B45B2] text-white px-4 py-2 rounded-lg shadow-lg flex items-center z-50">
      <CheckCircle className="h-6 w-6 mr-2" />
      <span>¡Producto añadido exitosamente!</span>
    </div>
  );
};

export default Toast;
