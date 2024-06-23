import { MongoClient } from "mongodb";

export async function main() {
  const uri =
    "mongodb+srv://praveencan111:2zOS0NGLOz@vegitablescluster.z4uwiqi.mongodb.net/";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Mongo Connected");
    const db = db.client("Vegitables");
    const collection = db.collection("user_details");
    return collection;
  } catch {
    console.log("error");
  }
}
