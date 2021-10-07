import { Handler } from "express";
const logger = require("../config/logger.conf");

// handler functions for tasks.routes
const getTask: Handler = async (req, res) => {
  try {
    res.send("Func getTask");
  } catch (e: any) {
    e.message = "Error in getTask func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
  }
};

const getTaskCount: Handler = (req, res) => {
  try {
    res.send("Func getTaskCount");
  } catch (e: any) {
    e.message = "Error in getTaskCount func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
  }
};

const postTask: Handler = (req, res) => {
  try {
    res.send("Func postTask");
  } catch (e: any) {
    e.message = "Error in postTask func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
  }
};

const getTaskById: Handler = (req, res) => {
  try {
    res.send("Func getTaskById");
  } catch (e: any) {
    e.message = "Error in getTaskById func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
  }
};

const deleteTask: Handler = (req, res) => {
  try {
    res.send("Func deleteTask");
  } catch (e: any) {
    e.message = "Error in deleteTask func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
  }
};

const putTaskByID: Handler = (req, res) => {
  try {
    res.send("Func putTaskByID");
  } catch (e: any) {
    e.message = "Error in putTaskByID func in tasks.controller";
    logger.error(e);
    res.status(500).send("Internal server error!");
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
