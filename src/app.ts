import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
require("dotenv").config();

// Swagger for automated API documentation
import swaggerUI from "swagger-ui-express";
import taskRoutes from "./routes/tasks.routes";

const app = express();
const logger = require("./config/logger.conf");

// open swagger docs
const yaml = require("js-yaml");
const path = require("path");

app.set("port", process.env.PORT || 3000);
app.use(cors());

app.use(express.json());

// Logging
app.use(morgan("dev"));
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("access.log", { flags: "a" }),
  })
);

// Routes
app.use(taskRoutes);

//route for swagger api documnetation
try {
  const file = fs.readFileSync(
    path.resolve(__dirname, "./config/openapi.yaml")
  );
  const swaggerJSDocs = yaml.load(file);
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs), () =>
    console.log("Error getting API documentation!")
  );
} catch (e) {
  logger.error(e);
}

//redirect for 404 if no route has handled the request thus far
app.use(function (req, res) {
  res.status(404).send({ error: "Requested resource not found!" });
  var error404 = new Error("Request for unavailable resource.");
  logger.http(error404);
});

export default app;
