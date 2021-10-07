const MongoClient = require("mongodb").MongoClient;

// global variable
let _db: string;

async function connect(url: string, dbname: string) {
  let client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
  _db = client.db(dbname);
  console.log("Database connected");
}

function getDB() {
  return _db;
}

module.exports = {
  connect,
  getDB,
};
