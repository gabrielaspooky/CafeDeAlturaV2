// seedProducts.js
import { connectToDatabase } from './lib/mongodb.js';
import { Product } from './models/Product.js';

const products = [
  {
    brand: "Costa Rica Tarrazú",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_tarrazu_jejzcp.png",
    available: true,
  },
  {
    brand: "Colombia Los Naranjos",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_los_naranjos_iajcb4.png",
    available: true,
  },
  {
    brand: "Laos Amanecer",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638764/cafe_de_altura/coffee_bag_laos_amanecer_wxhu0p.png",
    available: true,
  },
  // Agrega más productos aquí...
];

async function seedProducts() {
  const { db } = await connectToDatabase();

  try {
    // Borra los productos existentes (si los hay)
    await db.collection('products').deleteMany({});
    // Inserta los nuevos productos
    await db.collection('products').insertMany(products);
    console.log('Productos insertados exitosamente');
  } catch (error) {
    console.error('Error al insertar productos:', error);
  } finally {
    process.exit();
  }
}

seedProducts();
