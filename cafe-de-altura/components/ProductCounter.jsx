// "use client"
// import React, { useState, useEffect } from 'react';

// const ProductCounter = ({ productId }) => {
//   const [quantity, setQuantity] = useState(0);

//   Función para obtener la cantidad de productos del carrito
//   const fetchProductQuantity = () => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const productInCart = savedCart.find(item => item._id === productId);

//     if (productInCart) {
//       setQuantity(productInCart.quantity);
//     } else {
//       setQuantity(0);
//     }
//   };

//   Efecto para cargar la cantidad al montar el componente
//   useEffect(() => {
//     fetchProductQuantity();

//     Actualizar la cantidad cuando cambie el almacenamiento local
//     const handleStorageChange = () => fetchProductQuantity();
//     window.addEventListener("storage", handleStorageChange);

//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, [productId]);

//   return (
//     <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-black text-lg font-semibold">
//       {quantity}
//     </div>
//   );
// };

// export default ProductCounter;



