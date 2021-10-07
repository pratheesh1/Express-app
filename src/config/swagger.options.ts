export const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Project - 2 API",
      version: "1.0.0",
      description:
        "API for Trend Global DWAD TGC-14 Project 2 (@Pratheesh Soman)",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
