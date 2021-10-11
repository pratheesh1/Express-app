import { Handler } from "express";
import { JsonObject } from "swagger-ui-express";
const logger = require("../config/logger.conf");
const Trail = require("../models/trail");

// handler functions for trail routes
const getTrails: Handler = async (req, res) => {};

const getTrailCount: Handler = async (req, res) => {};

const postTrail: Handler = (req, res) => {};

const getTrailById: Handler = (req, res) => {};

const deleteTrailById: Handler = (req, res) => {};

const putTrailById: Handler = (req, res) => {};

export default {
  getTrails,
  getTrailCount,
  postTrail,
  getTrailById,
  deleteTrailById,
  putTrailById,
};
