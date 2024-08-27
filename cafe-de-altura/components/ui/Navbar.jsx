'use client'

import React, { useState } from 'react';
import { Coffee, Phone, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import ShoppingBagDrawer from './BagDrawer'; 
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const handleOpenDrawerAndNavigate = () => {
    setIsDrawerOpen(true);
    router.push('/shoppingBag'); 
  };

  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <nav className="top-0 bg-[#2B2A2B] relative z-50 h-12 flex justify-between items-center px-8 text-[#FFFFFF] w-full">
      {/* Logo Section */}
      <div className="flex items-center gap-1">
        <p className="text-lg">cafedealtura.com</p>
        <Coffee className="w-5 h-5" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 text-sm font-semibold">
        <li>
          <Link href="/shop" className="hover:bg-[#3E3E3E] py-2 px-3 rounded-md">Tienda</Link>
        </li>
        <li>
          <Link href="/subscription" className="hover:bg-[#3E3E3E] py-2 px-3 rounded-md">Suscripción</Link>
        </li>
        <li>
          <Link href="/forCompanies" className="hover:bg-[#3E3E3E] py-2 px-3 rounded-md">Para empresas</Link>
        </li>
        <li>
          <Link href="/aboutUs" className="hover:bg-[#3E3E3E] py-2 px-3 rounded-md">Sobre nosotros</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:bg-[#3E3E3E] py-2 px-3 rounded-md">Contacto</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Phone Section */}
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <p className="text-sm">+34 919 49 05 18</p>
        </div>

        {/* Login Button */}
        <Link href="/login" className="bg-[#3C3C3C] hover:bg-[#505050] text-white text-sm py-1 px-3 rounded-md">
          Iniciar sesión
        </Link>
        
        {/* Shopping Bag Button */}
        <button
          className="mt-4 px-4 py-2 text-white flex items-center"
          onClick={handleOpenDrawerAndNavigate}
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Shopping Bag Drawer */}
      {isDrawerOpen && <ShoppingBagDrawer onClose={handleCloseDrawer} />}
    </nav>
  );
};

export default NavBar;
