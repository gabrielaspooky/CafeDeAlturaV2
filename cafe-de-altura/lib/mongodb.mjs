// lib/mongodb.mjs
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    return client.db(); // Retorna la base de datos por defecto
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
