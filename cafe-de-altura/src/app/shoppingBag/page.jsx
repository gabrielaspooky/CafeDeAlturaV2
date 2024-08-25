"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";
import Link from "next/link";

const ShoppingBag = () => {
  const [cart, setCart] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState(""); // Nuevo estado para el método de envío

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    const subtotal = cart.reduce((total, product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = parseInt(product.quantity) || 1;
      return total + price * quantity;
    }, 0);

    const total = subtotal + shippingCost;

    localStorage.setItem(
      "cartSummary",
      JSON.stringify({
        subtotal: subtotal.toFixed(2),
        shippingCost: shippingCost.toFixed(2),
        total: total.toFixed(2),
      })
    );
  }, [cart, shippingCost]);

  const updateQuantity = (productId, change) => {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        const newQuantity = Math.max(
          1,
          (parseInt(product.quantity) || 1) + change
        );
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleShippingChange = (shippingOption) => {
    setSelectedShipping(shippingOption);
    if (shippingOption === "urgent") {
      setShippingCost(9.00); // El costo de envío urgente es de 9 euros
    } else {
      setShippingCost(0); // Envío estándar gratuito
    }
  };

  const subtotal = cart.reduce((total, product) => {
    const price = parseFloat(product.price) || 0;
    const quantity = parseInt(product.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const total = subtotal + shippingCost;

  return (
    <div className="bg-white min-h-screen py-8 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-green-900 mb-8">
          Cesta ({cart.length})
        </h1>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Products Section */}
          <div className="lg:w-3/4 w-full">
            <h2 className="text-lg font-semibold mb-4">Productos</h2>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                Tu carrito está vacío.
              </p>
            ) : (
              cart.map((product) => (
                <div key={product._id} className="border-b border-gray-300 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        className="text-gray-600"
                        onClick={() => updateQuantity(product._id, -1)}
                        disabled={(parseInt(product.quantity) || 1) <= 1}
                      >
                        <MinusCircle className="h-6 w-6" />
                      </button>
                      <span className="mx-2">
                        {parseInt(product.quantity) || 1}
                      </span>
                      <button
                        className="text-gray-600"
                        onClick={() => updateQuantity(product._id, 1)}
                      >
                        <PlusCircle className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={product.img_url}
                        alt={product.brand}
                        width={50}
                        height={50}
                      />
                      <div className="ml-4">
                        <p className="text-sm font-medium">{product.brand}</p>
                        <p className="text-sm text-gray-500">
                          Paquete de café, 250 gr
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      €
                      {(
                        (parseFloat(product.price) || 0) *
                        (parseInt(product.quantity) || 1)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Seleccionar envío</h3>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-radio accent-[#2A5B45]"
                    value="standard"
                    onChange={() => handleShippingChange("standard")}
                    checked={selectedShipping === "standard"}
                  />
                  <span className="ml-2 text-sm">Envío 5-7 días</span>
                  <span className="ml-auto text-sm font-semibold">GRATIS</span>
                </label>
                <p className="ml-6 text-gray-500 text-sm">
                  Opción estándar sin seguimiento
                </p>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-radio accent-[#2A5B45]"
                    value="urgent"
                    onChange={() => handleShippingChange("urgent")}
                    checked={selectedShipping === "urgent"}
                  />
                  <span className="ml-2 text-sm">Envío urgente 24h</span>
                  <span className="ml-auto text-sm font-semibold">€9.00</span>
                </label>
                <p className="ml-6 text-gray-500 text-sm">
                  Recibe tu pedido en las siguientes 24h (Para pedidos
                  realizados antes de las 13:00).
                </p>
              </div>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="lg:w-1/4 w-full lg:ml-8 mt-8 lg:mt-0">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-6">Total del carrito</h3>
              <div className="flex justify-between mb-4">
                <span className="text-sm">SUBTOTAL</span>
                <span className="text-sm font-semibold">
                  €{subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">ENVÍO</span>
                <span className="text-sm font-semibold">
                  €{shippingCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">TOTAL</span>
                <span className="text-lg font-semibold">
                  €{total.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Incluye IVA</p>
              <Link
                href="/checkout"
                className={`bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg ${!selectedShipping && "opacity-50 cursor-not-allowed"}`}
                onClick={(e) => !selectedShipping && e.preventDefault()} // Evitar que se haga click si no hay envío seleccionado
              >
                Ir al Checkout
              </Link>
              <a
                href="#"
                className="block text-center text-green-900 mt-4 underline"
              >
                Seguir comprando
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
