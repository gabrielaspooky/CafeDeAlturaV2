// lib/mongodb.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

let cachedClient = null;
let cachedDb = null;

export async function dbConnect() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedDb = client.connection.db;
    console.log("Connected to MongoDB successfully!");
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
