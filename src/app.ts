import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import swaggerUI from "swagger-ui-express";
require("dotenv").config();
// import routes
import taskRoutes from "./routes/tasks.routes";

// express
const app = express();
// custom error handling
const logger = require("./config/logger.conf");
// yaml and path for swagger docs
const yaml = require("js-yaml");
const path = require("path");
//set port
app.set("port", process.env.PORT || 3000);
//cors
app.use(cors());
// json middlewear for express
app.use(express.json());
// custom console log
app.use(morgan("dev"));
// write all server access request to file access.log
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("access.log", { flags: "a" }),
  })
);

// routes
app.use(taskRoutes);

// route for swagger api documentation @/api-docs
try {
  const file = fs.readFileSync(
    path.resolve(__dirname, "./config/openapi.yaml")
  );
  const swaggerJSDocs = yaml.load(file);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs), () =>
    console.log("Error getting API documentation!")
  );
} catch (e) {
  logger.error(e);
}

// 404 if no route has handled the request
app.use((req, res) => {
  res.status(404).send({ error: "Requested resource not found!" });
  var error404 = new Error("Request for unavailable resource.");
  logger.http(error404);
});

export default app;
