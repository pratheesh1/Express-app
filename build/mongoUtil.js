"use strict";
var MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGO_URI;
var _db;
module.exports = {
    connectToServer: function () {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            _db = client.db("sample_training");
        });
    },
    getDb: function () {
        return _db;
    },
};
