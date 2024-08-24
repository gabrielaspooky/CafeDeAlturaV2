import React from 'react';
import Image from 'next/image';
import { MinusCircle, PlusCircle } from 'lucide-react';
import Footer from '../../../components/ui/Footer';
import CopyrightFooter from '../../../components/ui/CopyrightFooter';
import Link from 'next/link';

const shoppingBag = () => {
  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-green-900 mb-8">Cesta (2)</h1>
        
        <div className="flex flex-col lg:flex-row justify-between">
          
          {/* Products Section */}
          <div className="lg:w-3/4 w-full">
            <h2 className="text-lg font-semibold mb-4">Productos</h2>
            
            <div className="border-b border-gray-300 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button className="text-gray-600">
                    <MinusCircle className="h-6 w-6" />
                  </button>
                  <span className="mx-2">1</span>
                  <button className="text-gray-600">
                    <PlusCircle className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center">
                  <Image src="/images/coffee-bag.jpg" alt="Colombia Los Naranjos" width={50} height={50} />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Colombia Los Naranjos</p>
                    <p className="text-sm text-gray-500">Paquete de café, 250 gr</p>
                  </div>
                </div>
                <p className="font-semibold">9,00 €</p>
              </div>
            </div>
            
            <div className="border-b border-gray-300 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button className="text-gray-600">
                    <MinusCircle className="h-6 w-6" />
                  </button>
                  <span className="mx-2">1</span>
                  <button className="text-gray-600">
                    <PlusCircle className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center">
                  <Image src="/images/coffee-bag.jpg" alt="Colombia La Casita" width={50} height={50} />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Colombia La Casita</p>
                    <p className="text-sm text-gray-500">Paquete de café, 250 gr</p>
                  </div>
                </div>
                <p className="font-semibold">9,00 €</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Seleccionar envío</h3>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="radio" name="shipping" className="form-radio text-green-600" checked />
                  <span className="ml-2 text-sm">Envío 5-7 días</span>
                  <span className="ml-auto text-sm font-semibold">GRATIS</span>
                </label>
                <p className="ml-6 text-gray-500 text-sm">Opción estándar sin seguimiento</p>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="radio" name="shipping" className="form-radio text-green-600" />
                  <span className="ml-2 text-sm">Envío urgente 24h</span>
                  <span className="ml-auto text-sm font-semibold">9,00 €</span>
                </label>
                <p className="ml-6 text-gray-500 text-sm">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
              </div>
            </div>
          </div>
          
          {/* Cart Summary Section */}
          <div className="lg:w-1/4 w-full lg:ml-8 mt-8 lg:mt-0">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-6">Total del carrito</h3>
              <div className="flex justify-between mb-4">
                <span className="text-sm">SUBTOTAL</span>
                <span className="text-sm font-semibold">18,00 €</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">ENVÍO</span>
                <span className="text-sm font-semibold">GRATIS</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">TOTAL</span>
                <span className="text-lg font-semibold">18,00 €</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Incluye 3,78€ de IVA</p>
              <Link href="/checkout" className="bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg">
          Ir al Checkout
        </Link>
              <a href="#" className="block text-center text-green-900 mt-4 underline">Seguir comprando</a>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
};

export default shoppingBag;
