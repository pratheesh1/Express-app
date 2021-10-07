import express from "express";
import cors from "cors";
import morgan from "morgan";
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
app.use(morgan("dev"));

app.use(express.json());

app.use(taskRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs), () =>
  console.log("Error getting API documentation!")
);

export default app;
