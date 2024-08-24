import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold">cafedealtura.com</h2>
            <div className="mt-4">
              <p>Te ayudamos en</p>
              <div className="flex items-center mt-2">
                <Phone className="h-6 w-6 text-white mr-2" />
                <Link href="tel:+34919490518" className="text-white">+34 919 49 05 18</Link>
              </div>
              <div className="flex items-center mt-2">
                <Mail className="h-6 w-6 text-white mr-2" />
                <Link href="mailto:hola@cafedealtura.com" className="text-white">hola@cafedealtura.com</Link>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-8 md:mb-0">
            <ul>
              <li><a href="#" className="text-white hover:underline">Tienda</a></li>
              <li><a href="#" className="text-white hover:underline">Suscripción</a></li>
              <li><a href="#" className="text-white hover:underline">Para empresas</a></li>
              <li><a href="#" className="text-white hover:underline">Sobre nosotros</a></li>
              <li><a href="#" className="text-white hover:underline">Contacto</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="mb-8 md:mb-0">
            <ul>
              <li><a href="#" className="text-white hover:underline">Política de privacidad</a></li>
              <li><a href="#" className="text-white hover:underline">Política de cookies</a></li>
              <li><a href="#" className="text-white hover:underline">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
