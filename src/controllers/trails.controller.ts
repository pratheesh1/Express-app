import { Handler } from "express";
const logger = require("../config/logger.conf");
const Trail = require("../models/trail");

// handler functions for trail routes
const getTrails: Handler = async (req, res) => {
  try {
    const request = req.query;

    //search by  query
    const q = request.q;
    let query = [];
    //add to the query if there are search terms
    if (q) {
      // generate regex for search
      const terms: Array<string> = q.toString().split(" ");
      const reducer = (previousValue: string, currentValue: string) =>
        previousValue + ".*" + currentValue;
      const search = terms.reduce(reducer);
      const regex = new RegExp("^.*" + search + ".*", "i");
      //query in trailName, description, describeTrail and country.name
      query.push({ trailName: { $regex: regex, $options: "i" } });
      query.push({ description: { $regex: regex, $options: "i" } });
      query.push({ describeTrail: { $regex: regex, $options: "i" } });
      query.push({ "country.name": { $regex: regex, $options: "i" } });
    } else {
      query.push({});
    }

    // { $regex: search.keyWord, $options: 'i' }}

    //search difficulty level
    const difficulty =
      typeof request.difficulty === "string"
        ? [request.difficulty]
        : request.difficulty;
    let difficultyFilter;
    if (request.difficulty) {
      difficultyFilter = { difficulty: { $in: difficulty } };
    } else {
      difficultyFilter = {};
    }

    //search by length
    const distance =
      typeof request.distance === "string"
        ? [request.distance]
        : request.distance;
    let distanceFilter = [];
    if (request.distance) {
      // @ts-ignore: undefined code error - if already making sure there is a value to start with
      distance.forEach((e) => {
        const query = e.split(",");
        distanceFilter.push({ distance: { $gte: query[0], $lte: query[1] } });
      });
    } else {
      distanceFilter.push({});
    }

    //find and return all trails based on query
    let trailsArray = await Trail.find({
      $and: [
        {
          $or: query,
        },
        difficultyFilter,
        {
          $or: distanceFilter,
        },
      ],
    }).exec();
    res.status(200).send(trailsArray);
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

const postTrail: Handler = async (req, res) => {
  try {
    const newTrail = new Trail(req.body);
    await newTrail.save();
    res.status(201).send("Created");
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

const getTrailCount: Handler = async (req, res) => {
  try {
    const count = await Trail.count().exec();
    res.status(200).send({ trailCount: count });
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

const getTrailById: Handler = async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id).exec();
    res.status(200).send(trail);
  } catch (e: any) {
    if (e.message.includes("ObjectId")) {
      res.status(400).send({ message: "invalid document _id" });
      logger.error(e);
    } else {
      res.status(500).send("Server encountered an internal error!");
      logger.error(e);
    }
  }
};

const deleteTrailById: Handler = async (req, res) => {
  try {
    const trail = await Trail.findByIdAndDelete(req.params.id).exec();
    res.status(204).send("Deleted");
  } catch (e: any) {
    if (e.message.includes("ObjectId")) {
      res.status(400).send({ message: "invalid document _id" });
      logger.error(e);
    } else {
      res.status(500).send("Server encountered an internal error!");
      logger.error(e);
    }
  }
};

const putTrailById: Handler = async (req, res) => {
  try {
    const update = req.body;
    const updatedTrail = await Trail.findOneAndUpdate(
      { _id: req.params.id },
      update,
      {
        new: true,
      }
    ).exec();
    res.status(200).send(updatedTrail);
  } catch (e: any) {
    if (e.message.includes("ObjectId")) {
      res.status(400).send({ message: "invalid document _id" });
      logger.error(e);
    } else if (e.message.includes("Cast")) {
      res
        .status(400)
        .send({ message: "datatype does not match filed to be updated" });
      logger.error(e);
    } else {
      res.status(500).send("Server encountered an internal error!");
      logger.error(e);
    }
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
