import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/mongodb.mjs'; // Ruta a la conexión de MongoDB
import Product from '../../../../models/Product'; // Ruta al modelo Product

export async function GET(request) {
  try {
    // Conectarse a la base de datos
    await dbConnect();

    // Obtener los productos desde la base de datos
    const products = await Product.find().lean();

    // Responder con la lista de productos
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);

    // Responder con un error en caso de fallo
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
