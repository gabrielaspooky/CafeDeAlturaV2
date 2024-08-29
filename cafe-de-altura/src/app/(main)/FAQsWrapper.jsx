'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MoveRight } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 bg-gray-100 rounded-lg max-w-2xl mx-auto">
      <button
        onClick={toggleFaq}
        className="w-full p-4 flex justify-between items-center bg-white text-left text-black rounded-lg focus:outline-none"
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-black transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-black transition-transform duration-300" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-gray-50 text-gray-700 rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faqs = () => {
  const faqData = [
    {
      question: '¿Cómo hago el pedido?',
      answer: 'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.',
    },
    {
      question: '¿Por qué los precios son tan bajos?',
      answer: 'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible. ',
    },
    {
      question: '¿Es posible enviar café a mi oficina?',
      answer: 'Selecciona el café que desees probar y completa el proceso de compra.',
    },
  ];

  return (
    <div className="mx-auto py-12 bg-[#2A5B45] text-">
      <h2 className="text-2xl text-white text-center mb-8">Preguntas frecuentes</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <div className="text-center mt-8">
        <a href="#" className="inline-block text-white hover:underline">
          Resolvemos tus dudas <MoveRight className="inline w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Faqs;
