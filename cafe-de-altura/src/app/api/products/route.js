import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/mongodb.mjs'; 
import Product from '../../../../models/Product'; 

export async function GET(request) {
  try {
  
    await dbConnect();

    
    const products = await Product.find().lean();


    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);


    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
