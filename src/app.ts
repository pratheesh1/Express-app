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

app.set("port", process.env.PORT || 3000);

app.use(cors());

// Logs with Morgan
app.use(morgan("dev"));
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("access.log", { flags: "a" }),
  })
);

app.use(express.json());

app.use(taskRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs), () =>
  console.log("Error getting API documentation!")
);

export default app;
