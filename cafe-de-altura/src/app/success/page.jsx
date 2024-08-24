import React from 'react'
import { ClipboardCheck } from "lucide-react";
import Link from "next/link";

const success = () => {
  return (
    
    <div>
        <ClipboardCheck />
<p>
El pedido #12387 se encuentra en preparación. 
Lo recibirás dentro de las fechas acordadas en tu envío. 
Hemos enviado un ticket a tu correo electrónico.
</p>

<Link href="/shop" className="bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg">
          Volver a la tienda
        </Link>
    </div>
  )
}

export default success