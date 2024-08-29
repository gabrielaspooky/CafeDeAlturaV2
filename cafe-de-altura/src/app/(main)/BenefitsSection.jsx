import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Image src={`/Icon1.svg`} alt="Icono 1" width={48} height={48} />,
      title: 'Recibe tu pedido sin preocuparte',
      description: 'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.',
    },
    {
      icon: <Image src={`/Icon2.svg`} alt="Icono 2" width={48} height={48} />,
      title: 'Envío en 24/48h',
      description: 'Pide tu café antes de las 12h y lo recibirás al día siguiente.',
    },
    {
      icon: <Image src={`/Icon3.svg`} alt="Icono 3" width={48} height={48} />,
      title: 'Descuentos y beneficios',
      description: 'Disfruta de descuentos exclusivos y beneficios adicionales al suscribirte a nuestro servicio.',
    },
  ];

  return (
   <div className="bg-cover bg-center py-12" style={{ backgroundImage: `url('/coffee-background.jpg')` }}>
    <h2 className="text-center text-2xl text-white mb-8">Café con las mejores condiciones</h2>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center w-80 flex-shrink-0 flex-grow-0">
          <div className="flex justify-center">{benefit.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">{benefit.title}</h3>
          <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
