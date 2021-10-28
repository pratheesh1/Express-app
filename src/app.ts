import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import swaggerUI from "swagger-ui-express";
require("dotenv").config();
// import routes
import trailRoutes from "./routes/trails.routes";
import countryRoutes from "./routes/countries.routes";

// express
const app = express();
// custom error handling
const logger = require("./config/logger.conf");
//set port
app.set("port", process.env.PORT || 3000);
//cors
app.use(cors());
// custom console log
app.use(morgan("dev"));
// write all server access request to file access.log
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("access.log", { flags: "a" }),
  })
);

// routes
app.use(trailRoutes);
app.use(countryRoutes);

// route for swagger api documentation @/api-docs
const swaggerJSDocs = require("./config/swagger.conf");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs.default));

// 404 if no route has handled the request
app.use((req, res) => {
  res.status(404).send("Requested resource not found!");
  var error404 = new Error("Request for unavailable resource.");
  logger.http(error404);
});

export default app;
