'use client'

import { Coffee, Phone, ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";
import ShoppingBagDrawer from "./BagDrawer";


const NavBar = () => {
  return (
    <nav className="bg-[#2B2A2B] relative z-50 h-16 flex justify-between items-center px-8 text-[#FFFFFF] w-full">
      {/* Logo Section */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">cafedealtura.com</p>
          <Coffee className="w-6 h-6" />
        </div>
 

      {/* Navigation Links */}
      <ul className="flex gap-8 text-sm font-semibold">
        <li>
          <Link href="/shop" className="hover:bg-[#F7F5F31A] py-2 px-3 rounded-lg">Tienda
          </Link>
        </li>
        <li>
          <Link href="/subscription" className="hover:bg-[#F7F5F31A] py-2 px-3 rounded-lg">Suscripción
          </Link>
        </li>
        <li>
          <Link href="/forCompanies" className="hover:bg-[#F7F5F31A] py-2 px-3 rounded-lg">Para empresas
          </Link>
        </li>
        <li>
          <Link href="/aboutUs" className="hover:bg-[#F7F5F31A] py-2 px-3 rounded-lg">Sobre nosotros
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:bg-[#F7F5F31A] py-2 px-3 rounded-lg">
          Contacto
          </Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Phone Section */}
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <p className="text-sm">+34 919 49 05 18</p>
        </div>

        {/* Login Button */}
        <Link href="/login" className="bg-[#3C3C3C] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg">
            Iniciar sesión
        </Link>

        {/* Shopping Bag Icon */}
      <ShoppingBagDrawer />
      </div>
    </nav>
  );
};

export default NavBar;
