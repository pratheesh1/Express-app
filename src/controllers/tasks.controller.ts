import { Handler } from "express";

const getTask: Handler = async (req, res) => {
  try {
    res.send("Func getTask");
  } catch (e) {
    res.status(500).send("Internal server error!");
  }
};

const getTaskCount: Handler = (req, res) => {
  try {
    res.send("Func getTaskCount");
  } catch (e) {
    res.status(500).send("Internal server error!");
  }
};

const postTask: Handler = (req, res) => {
  try {
    res.send("Func postTask");
  } catch (e) {
    res.status(500).send("Internal server error!");
  }
};

const getTaskById: Handler = (req, res) => {
  try {
    res.send("Func getTaskById");
  } catch (e) {
    res.status(500).send("Internal server error!");
  }
};

const deleteTask: Handler = (req, res) => {
  try {
    res.send("Func deleteTask");
  } catch (e) {
    res.status(500).send("Internal server error!");
  }
};

const putTaskByID: Handler = (req, res) => {
  try {
    res.send("Func putTaskByID");
  } catch (e) {
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
