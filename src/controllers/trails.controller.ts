import { Handler } from "express";
const logger = require("../config/logger.conf");
const Trail = require("../models/trail");

// handler functions for trail routes
const getTrails: Handler = async (req, res) => {
  try {
    let trailsArray = await Trail.find().exec();
    res.status(200).send(trailsArray);
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

const postTrail: Handler = async (req, res) => {
  try {
    const newTrail = new Trail(req.body);
    await newTrail.save();
    res.status(201).send("Created");
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

const getTrailCount: Handler = async (req, res) => {
  try {
    const count = await Trail.count().exec();
    res.status(200).send({ trailCount: count });
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

const getTrailById: Handler = async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id).exec();
    res.status(200).send(trail);
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

const deleteTrailById: Handler = async (req, res) => {
  try {
    const trail = await Trail.findByIdAndDelete(req.params.id).exec();
    res.status(204).send("Deleted");
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

const putTrailById: Handler = async (req, res) => {
  try {
    const updatedTrail = new Trail(req.body);
    await Trail.findOneAndUpdate({ _id: req.params.id }, updatedTrail).exec();
    res.status(200).send("Updated");
  } catch (e) {
    res.status(500).send("Server encountered and internal error!");
    logger.error(e);
  }
};

export default {
  getTrails,
  getTrailCount,
  postTrail,
  getTrailById,
  deleteTrailById,
  putTrailById,
};
