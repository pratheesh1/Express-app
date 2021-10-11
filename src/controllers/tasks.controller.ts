import { Handler } from "express";
import { JsonObject } from "swagger-ui-express";
const logger = require("../config/logger.conf");
const Country = require("../models/country");

var collection: string = "";
//chage collection name here - db to be updated in .env file
collection = "companies";

//FIXME: res.render for images?

// handler functions for tasks.routes
const getTask: Handler = async (req, res) => {
  Country.find()
    .then((result: JsonObject) => res.send(result))
    .catch((e: any) => {
      logger.error(e);
      res.status(500).send("Server encountered and internal error!");
    });
};

const getTaskCount: Handler = async (req, res) => {};

const postTask: Handler = (req, res) => {
  var country = new Country({
    name: "Sammy",
    phone: 98567777,
    contact: [65465465, 64654654, 64646],
  });

  country
    .save()
    .then((result: JsonObject) => res.send(result))
    .catch((e: any) => {
      logger.error(e);
      res.status(500).send("Server encountered and internal error!");
    });
};

const getTaskById: Handler = (req, res) => {};

const deleteTask: Handler = (req, res) => {};

const putTaskByID: Handler = (req, res) => {};

export default {
  getTask,
  getTaskCount,
  postTask,
  getTaskById,
  deleteTask,
  putTaskByID,
};
