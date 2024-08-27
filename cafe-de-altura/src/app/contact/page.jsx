import React from 'react'
import Link from 'next/link'

const contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-brown-50 text-brown-900">
      <h1 className="text-6xl font-bold mb-4">¡Ups! 404...</h1>
      <p className="text-xl mb-2">Parece que te has perdido entre el aroma del café.
      </p>
    <Link href="/shop" className="bg-[#2A5B45] hover:bg-[#505050] text-white text-sm py-2 px-4 rounded-lg">
          Volver al inicio
        </Link>
    </div>
    </div>
  )
}

export default contact