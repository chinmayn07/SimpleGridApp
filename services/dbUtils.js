const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const monClient = new MongoClient(url);

const DBName = "student_academics";
const Collection = "student_details";

async function connectToMongo() {
  await monClient.connect();
  console.log("Connected");
  const db = monClient.db(DBName);
  const collection = db.collection(Collection);
  return collection;
}
function closeMongoConnection() {
  if (monClient) {
    monClient.close();
    console.log("Connection closed");
  }
}
async function queryFromDB(queryParams, page, size) {
  const collection = await connectToMongo();
  const result = await collection
    .find(queryParams)
    .skip((page - 1) * size)
    .limit(size)
    .toArray();
  closeMongoConnection();
  return result;
}

async function insertMultiplesToDB(data) {
  const collection = await connectToMongo();
  const result = collection.insertMany(data);
  closeMongoConnection();
  return result;
}

module.exports = { queryFromDB, insertMultiplesToDB };
