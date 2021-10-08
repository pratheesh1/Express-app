import { Handler } from "express";
const logger = require("../config/logger.conf");
const _db = require("../config/mongo.util");

var collection: string = "";
//chage collection name here - db to be updated in .env file
collection = "companies";

//FIXME: res.render for images?

// handler functions for tasks.routes
const getTask: Handler = async (req, res) => {
  try {
    let db = _db.getDB();
    let companies = await db.collection(collection).find({}).toArray();
    res.json(companies);
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

const getTaskCount: Handler = async (req, res) => {
  try {
    let db = _db.getDB();
    let companies = await db.collection(collection).countDocuments({});
    res.send({ numberOfRecords: companies });
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

const postTask: Handler = (req, res) => {
  try {
    res.send("Func postTask");
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

const getTaskById: Handler = (req, res) => {
  try {
    res.send("Func getTaskById");
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

const deleteTask: Handler = (req, res) => {
  try {
    res.send("Func deleteTask");
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

const putTaskByID: Handler = (req, res) => {
  try {
    res.send("Func putTaskByID");
  } catch (e: any) {
    logger.error(e);
    res.status(500).send("Server encountered and internal error!");
  }
};

export default {
  getTask,
  getTaskCount,
  postTask,
  getTaskById,
  deleteTask,
  putTaskByID,
};
