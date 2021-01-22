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
        res.status(500).json({ error: err.message })
    })
  });
  router.post("/", (req, res) => {
    Project.add(req.body)
      .then(pjt => {
        res.status(201).json(pjt.body);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
 
module.exports = router;
