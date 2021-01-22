// build your server here
const express = require("express");
const helmet = require("helmet");

const db = require('../data/dbConfig')

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/project", (req, res) => {
  db('projects')
  .then(project =>{
      res.status(200).json(project)
  })
  .catch(err =>{
      res.status(500).json(err)
  })
});
module.exports = server;