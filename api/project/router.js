// build your `/api/projects` router here
const express = require('express');

const router = express.Router();
const Project = require('./model')

router.get("/", (req, res) => {
   Project.list()
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
  });
  router.post("/", (req, res) => {
    Project.add(req.body)
      .then(res => {
        res.status(201).json(res);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
 
module.exports = router;