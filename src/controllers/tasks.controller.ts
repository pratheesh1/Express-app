import { Handler, response } from "express";

const getTask: Handler = (req, res) => {
  res.send("Func getTask");
};

const getTaskCount: Handler = (req, res) => {
  res.send("Func getTaskCount");
};

const postTask: Handler = (req, res) => {
  res.send("Func postTask");
};

const getTaskById: Handler = (req, res) => {
  res.send("Func getTaskById");
};

const deleteTask: Handler = (req, res) => {
  res.send("Func deleteTask");
};

const putTaskByID: Handler = (req, res) => {
  res.send("Func putTaskByID");
};

export default {
  getTask,
  getTaskCount,
  postTask,
  getTaskById,
  deleteTask,
  putTaskByID,
};
