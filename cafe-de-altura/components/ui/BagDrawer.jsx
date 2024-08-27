"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";
import Link from "next/link";

const ShoppingBagDrawer = () => {
  const [cart, setCart] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState("");

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
    setShippingCost(shippingOption === "urgent" ? 9.00 : 0);
  };

  const subtotal = cart.reduce((total, product) => {
    const price = parseFloat(product.price) || 0;
    const quantity = parseInt(product.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const total = subtotal + shippingCost;

  return (
    <div className="fixed right-0 top-0 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-lg font-semibold mb-4">Tu carrito ({cart.length})</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product._id} className="flex items-center justify-between">
              <Image
                src={product.img_url}
                alt={product.brand}
                width={50}
                height={50}
                className="object-cover rounded"
              />
              <div className="flex-1 ml-2">
                <p className="text-sm font-medium">{product.brand}</p>
                <p className="text-sm text-gray-500">
                  €{product.price.toFixed(2)} x {product.quantity}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  className="text-gray-600"
                  onClick={() => updateQuantity(product._id, -1)}
                  disabled={(parseInt(product.quantity) || 1) <= 1}
                >
                  <MinusCircle className="h-5 w-5" />
                </button>
                <span className="mx-2">{parseInt(product.quantity) || 1}</span>
                <button
                  className="text-gray-600"
                  onClick={() => updateQuantity(product._id, 1)}
                >
                  <PlusCircle className="h-5 w-5" />
                </button>
              </div>
              <p className="font-semibold">
                €
                {(
                  (parseFloat(product.price) || 0) *
                  (parseInt(product.quantity) || 1)
                ).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Seleccionar envío</h3>
            <div className="mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio accent-[#2A5B45]"
                  value="standard"
                  onChange={() => handleShippingChange("standard")}
                  checked={selectedShipping === "standard"}
                />
                <span className="ml-2 text-sm">Envío 5-7 días - GRATIS</span>
              </label>
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
                <span className="ml-2 text-sm">Envío urgente 24h - €9.00</span>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm font-semibold">
                €{subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Envío</span>
              <span className="text-sm font-semibold">
                €{shippingCost.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2 border-t pt-2">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">
                €{total.toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              className={`block mt-4 text-center py-2 px-4 bg-[#2A5B45] text-white rounded ${!selectedShipping && "opacity-50 cursor-not-allowed"}`}
              onClick={(e) => !selectedShipping && e.preventDefault()} // Evitar que se haga click si no hay envío seleccionado
            >
              Ir al Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagDrawer;
