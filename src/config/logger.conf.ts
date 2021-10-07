const { format, createLogger, transports } = require("winston");
const { timestamp, combine, errors, json, printf, colorize } = format;

interface logFormat {
  level?: string;
  message?: string;
  timestamp?: Date;
  stack: any;
}

// function for handling prod error - format:json
function buildProdLogger() {
  return createLogger({
    level: "debug",
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: "TGC 14 Project - 2 API" },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "prod.error.log",
        level: "error",
      }),
    ],
  });
}

// function for handling prod error - format-custom
function buildDevLogger() {
  const logFormat = printf(
    ({ level, message, timestamp, stack }: logFormat) => {
      return `${timestamp} ${level}: ${stack || message}`;
    }
  );

  return createLogger({
    level: "silly",
    format: combine(
      colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    defaultMeta: { service: "TGC 14 Project - 2 API" },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "dev.error.log",
        level: "silly",
      }),
    ],
  });
}

let logger =
  process.env.NODE_ENV === "development" ? buildDevLogger() : buildProdLogger();

module.exports = logger;
