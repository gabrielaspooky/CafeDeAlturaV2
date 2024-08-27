import React from 'react';
import { Phone, Mail, Coffee } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg">cafedealtura.com <Coffee />
            </h2>
            <div className="mt-4">
              <p>Te ayudamos en</p>
              <div className="bg-[#3C3C3C] hover:bg-[#505050] text-sm py-1 px-3 rounded-md flex items-center mt-2 gap-2 text-center">
                <Phone className="h-6 w-6 text-white mr-2" />
                <Link href="tel:+34919490518" className="text-white">+34 919 49 05 18</Link>
              </div>
              <div className="flex items-center mt-2 bg-[#3C3C3C] hover:bg-[#505050] text-sm py-1 px-3 rounded-md text-center">
                <Mail className="h-6 w-6 text-white mr-2" />
                <Link href="mailto:hola@cafedealtura.com" className="text-white bg-[#3C3C3C] hover:bg-[#505050] text-sm py-1 px-3 rounded-md">hola@cafedealtura.com</Link>
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
