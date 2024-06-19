import { Collection } from "mongodb";
import { main } from "./Db.js";
import express from "express";

const app = express();

app.post("/signupDetails", async (req, res) => {
  const collection = await main();
  const data = req.body;
  const insertData = await collection.insertOne(data);
  console.log("successfully inserted");
});

main();
app.listen(3820, () => {
  console.log("3820");
});
