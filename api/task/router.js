// build your `/api/tasks` router here
const express = require('express');

const router = express.Router();
const Task = require('./model')

router.get("/", (req, res) => {
   Task.list()
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(err =>{
        res.status(500).json({error: err.message})
    })
  });
  router.post("/", (req, res) => {
    Task.add(req.body)
      .then(task => {
        res.status(201).json(task.body);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
 
module.exports = router;