"use client"
import React from 'react'
import { Mail, Phone } from "lucide-react";
import HomeForm from './HomeForm';

const ContactForm = () => {
  return (
          <div className="h-[480px] bg-[#E3DED7] flex justify-center items-center">
          <div className="mb-8 lg:mb-0 lg:w-1/2 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Entra en contacto con nosotros</h2>
        <p className="mb-4">
          Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.
        </p>
        <p className="mb-4">
          También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de la tienda.
        </p>
        <address className="not-italic mb-4">
          742 Evergreen Terrace
          <br />
          Springfield, OR 12345
        </address>
        <p className="mb-4">
          <Phone /> <a href="tel:+15551234567" className="text-blue-500">+1 (555) 123-4567</a><br />
          <Mail /> <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>
        </p>
        <p>
          ¿Buscas un trabajo?{' '}
          <a href="#" className="text-blue-500 font-semibold">Ver nuestras ofertas.</a>
        </p>
          </div>
          <HomeForm />
    </div>
  )
}

export default ContactForm