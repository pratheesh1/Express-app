import app from "./app";
const logger = require("./config/logger.conf");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Database connected");
    app.listen(app.get("port"));
  })
  .catch((e: any) => logger.error(e));

logger.info(
  `Server listening on port ${app.get("port")}. ${
    process.env.NODE_ENV ? "NODE_ENV:" + process.env.NODE_ENV : null
  }!`
);
