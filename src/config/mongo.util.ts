const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const logErr = require("./logger.conf");

// global variable
let _db: string | undefined;

async function connect(url: string | undefined, dbname: string | undefined) {
  try {
    let client = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });
    _db = client.db(dbname);
    console.log(`Connected to database ${process.env.DB}`);
  } catch (e: any) {
    logErr.error(e);
  }
}

async function connectDb() {
  try {
    await connect(process.env.MONGO_URI, process.env.DB);
  } catch (e: any) {
    e.message = e.message + " / Error connecting to db in config/mongo.util";
    logErr.error(e);
  }
}

connectDb();

function getDB() {
  return _db;
}

module.exports = { getDB };
