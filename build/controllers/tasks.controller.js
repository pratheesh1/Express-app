"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = void 0;
var MongoUtil = require("../mongoUtil");
var ObjectId = require("mongodb").ObjectId;
var getTask = function (req, res) {
    mongoUtil.connectToServer(function (err, client) {
        if (err)
            console.log(err);
        var data = db.collection("companies").find();
        res.json(data);
    });
};
exports.getTask = getTask;
