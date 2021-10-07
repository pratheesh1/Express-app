import { Handler } from "express";
const logger = require("../config/logger.conf");
const _db = require("../config/mongo.util");

var collection: string = "";
//chage collection name here - db to be updated in .env file
collection = "companies";

// handler functions for tasks.routes
const getTask: Handler = async (req, res) => {
  try {
    let db = _db.getDB();
    let companies = await db.collection(collection).find({}).toArray();
    res.json(companies);
  } catch (e: any) {
    e.message =
      e.message + " / Error  occured in getTask func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
  }
};

const getTaskCount: Handler = async (req, res) => {
  try {
    let db = _db.getDB();
    let companies = await db.collection(collection).count({});
    res.send(companies);
  } catch (e: any) {
    e.message =
      e.message + " / Error  occured in getTaskCount func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
  }
};

const postTask: Handler = (req, res) => {
  try {
    res.send("Func postTask");
  } catch (e: any) {
    e.message = "Error in postTask func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
  }
};

const getTaskById: Handler = (req, res) => {
  try {
    res.send("Func getTaskById");
  } catch (e: any) {
    e.message = "Error in getTaskById func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
  }
};

const deleteTask: Handler = (req, res) => {
  try {
    res.send("Func deleteTask");
  } catch (e: any) {
    e.message = "Error in deleteTask func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
  }
};

const putTaskByID: Handler = (req, res) => {
  try {
    res.send("Func putTaskByID");
  } catch (e: any) {
    e.message = "Error in putTaskByID func in tasks.controller";
    logger.error(e);
    res.sendStatus(500).send("Internal server error!");
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
