import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const ShoppingBagDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-40"> {/* Ajusta el z-index aquí */}
      {/* Shopping Bag Icon */}
      <div 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link href="/shoppingBag">
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div 
          className="absolute right-0 top-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h3 className="text-lg font-semibold mb-2 text-black">Tu carrito</h3>
          <p className="text-gray-600">No tienes productos en tu carrito.</p>
          <Link href="/shoppingBag">
            <button className="mt-4 px-4 py-2 text-black flex items-center">
              <ShoppingCart size={40} strokeWidth={1.25} />
              <span className="ml-2">Ver carrito</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagDrawer;
