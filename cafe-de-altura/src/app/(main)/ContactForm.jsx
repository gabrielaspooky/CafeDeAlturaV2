"use client"
import React from 'react'
import { Mail, Phone } from "lucide-react";
import HomeForm from './HomeForm';

const ContactForm = () => {
  return (
    <div className="h-[480px] bg-[#E3DED7] flex justify-center items-center">
      <div className="mb-8 lg:mb-0 lg:w-1/2 text-[#111827]">
        <h2 className="text-2xl font-bold mb-4 text-[#111827]">Entra en contacto con nosotros</h2>
        <p className="mb-4 text-[#6B7280]">
          Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.
        </p>
        <p className="mb-4 text-[#6B7280]">
          También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de la tienda.
        </p>
        <address className="not-italic text-[#6B7280]">
          742 Evergreen Terrace
          <br />
          Springfield, OR 12345
        </address>
        <br />
        <p className="mb-4">
          <span className="flex items-center mb-2">
            <Phone className='text-[#6B7280] mr-2'/> 
            <a href="tel:+15551234567" className="text-[#6B7280]">+1 (555) 123-4567</a>
          </span>
          <span className="flex items-center">
            <Mail className='text-[#6B7280] mr-2'/> 
            <a href="mailto:support@example.com" className="text-[#6B7280]">support@example.com</a>
          </span>
        </p>
        <p className='text-[#6B7280]'>
          ¿Buscas un trabajo?{' '}
          <a href="#" className="text-[#111827] font-semibold underline">Ver nuestras ofertas.</a>
        </p>
      </div>
      <HomeForm />
    </div>
  )
}

export default ContactForm;
