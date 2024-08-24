import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

let client;
let db;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

export async function connectToDatabase() {
  if (db) {
    return { db, client };
  }
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db(dbName);
  return { db, client };
}
