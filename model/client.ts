import clientPromise from "@/lib/mongodb";
import { Collection } from "mongodb";

export interface Client {
  name: string;
  instagram_access_token: string;
  instagram_user_id: string;
  instagram_token_expiry: number;
}

let collection: Collection<Client>;

export async function getCollection() {
  const client = await clientPromise;
  const db = client.db('websites');
  if (!collection) {
    collection = db.collection<Client>('clients');
  }
  return collection;
}

export async function getClient(name: string) {
  const collection = await getCollection();
  return collection.findOne({ name });
}

export async function saveClient(client: Client) {
  const collection = await getCollection();
  return collection.updateOne({
    name: client.name
  }, {
    $set: client
  }, {
    upsert: true
  });
}

export async function updateToken(name: string, {
  instagram_access_token,
  instagram_user_id,
  expires_in
}: {
  instagram_access_token: string;
  instagram_user_id: string;
  expires_in: number;
}) {
  const collection = await getCollection();
  return collection.updateOne({
    name
  }, {
    $set: {
      instagram_access_token,
      instagram_user_id,
      instagram_token_expiry: Date.now() + expires_in * 1000
    }
  }, {
    upsert: true
  });
}