import app from "./app";

app.listen(app.get("port"));

console.log(
  `Server listening on port ${app.get("port")}. ${
    process.env.NODE_ENV ? "NODE_ENV:" + process.env.NODE_ENV : null
  }!`
);
