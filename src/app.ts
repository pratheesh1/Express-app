import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
require("dotenv").config();

// Swagger for automated API documentation
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./config/swagger.options";
import taskRoutes from "./routes/tasks.routes";

const app = express();
const specs = swaggerJSDoc(options);
const logger = require("./config/logger.conf");

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
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs), () =>
  console.log("Error getting API documentation!")
);

//redirect for 404 if no route has handled the request thus far
app.use(function (req, res) {
  res.status(404).send({ error: "Requested resource not found!" });
  var error404 = new Error("Request for unavailable resource.");
  logger.http(error404);
});

export default app;
