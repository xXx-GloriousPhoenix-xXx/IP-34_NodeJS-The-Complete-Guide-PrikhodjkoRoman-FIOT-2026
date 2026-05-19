import { MongoClient, Db } from 'npm:mongodb@6.1.0';

let db: Db;

export async function connect() {
  const client = new MongoClient(
    'mongodb+srv://denoUser:denopass123@prikhodjkoromanip34clus.aftawgg.mongodb.net/todo-app'
  );
  await client.connect();
  db = client.db('todo-app');
}

export function getDb() {
  return db;
}