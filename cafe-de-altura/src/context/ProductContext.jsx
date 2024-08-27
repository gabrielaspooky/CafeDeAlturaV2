/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  // --------------- Estados iniciales al cargar pagina ----------------- //

  const [dataCoffee, setDataCoffee] = useState([]);
  const [dataSelected, setDataSelected] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalOfProducts, setTotalOfProducts] = useState(0)
  const [totalDelivery, setTotalDelivery] = useState(0)
  const [selectedShipping, setSelectedShipping] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  // ----------- Estado Inicial con LocalStorage -------------- //

  useEffect(() => {
    const dataSelectedLS = JSON.parse(localStorage.getItem("arrayProductsSelected") || "[]")
    const totalPriceLS = JSON.parse(localStorage.getItem("totalPrice") || "0");
    const totalProductsLS = JSON.parse(localStorage.getItem("totalProducts") || "0");
    const totalDeliveryLS = JSON.parse(localStorage.getItem("totalDelivery") || "0");
    setDataSelected(dataSelectedLS)
    setTotalPrice(totalPriceLS)
    setTotalOfProducts(totalProductsLS)
    setTotalDelivery(totalDeliveryLS)
    setIsInitialized(true);
  }, [])

  // ----------- Fetch Data ---------------- //

  const fetchCoffeeData = async () => {
    try {
      const response = await fetch(
        "https://cafe-de-altura-alpha.vercel.app/api/products"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDataCoffee(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  // ----------- Funciones Carrito ------------------- //

  const productCount = (productSelected, arraySelected) => {
    const productsCount = arraySelected.reduce((acc, product) => {
      if (product.id === productSelected.id) {
        product.count++;
        return true;
      }
      return acc;
    }, false);
    if (!productsCount) {
      const newDataSelected = [...dataSelected, productSelected]
      setDataSelected(newDataSelected);
    }
    return arraySelected;
  };

  const btnAddProducts = (product) => {
    product.count++;
    setTotalOfProducts((prev) => (prev += 1));
    setTotalPrice((prev) => prev + product.price);
  };

  const btnSubtractProducts = (product, dataSelected) => {
    if (product.count > 1) {
      product.count--;
    } else {
      const deleteProduct = dataSelected.findIndex((productFind) => {
        return productFind.id === product.id;
      });
      dataSelected.splice(deleteProduct, 1);
    }
    setTotalOfProducts((prev) => (prev -= 1));
    setTotalPrice((prev) => prev - product.price);
  };

  const btnClearCart = (dataSelected) => {
    dataSelected.splice(0, dataSelected.length);
    setTotalOfProducts(0);
    setTotalPrice(0);
    setTotalDelivery(0)
    setSelectedShipping("free")
  };

  // --------------- Actualizacion localStorage ------------------------ //

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("arrayProductsSelected", JSON.stringify(dataSelected));
      localStorage.setItem("totalProducts", JSON.stringify(totalOfProducts));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      localStorage.setItem("totalDelivery", JSON.stringify(totalDelivery));
    }
  }, [dataSelected, totalOfProducts, totalPrice, totalDelivery]);

  // -------------- Estado del envio --------------------------- //

  useEffect(() => {
    const checkDelivery = () => {
      if (totalDelivery == "0") {
        setSelectedShipping("free");
      } else {
        setSelectedShipping("urgent");
      }
    };
    checkDelivery();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        dataCoffee,
        dataSelected,
        totalPrice,
        totalOfProducts,
        totalDelivery,
        selectedShipping,
        productCount,
        setDataSelected,
        setTotalOfProducts,
        setTotalPrice,
        btnAddProducts,
        btnSubtractProducts,
        btnClearCart,
        setTotalDelivery,
        setSelectedShipping,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}