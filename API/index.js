const express = require("express");
const { getProjects } = require("./Projects");
const app = express();

const Middleware = (req, res, next) => {
  //Middleware code
  next();
};

app.use(Middleware);

app.get("/projects", (req, res) => {
  const projects = getProjects();
  res.send(projects);
});

app.get("/", (req, res) => {
  res.send("API Alive");
});

app.listen(3000, () => {
  console.log("Server running and breathing");
});
