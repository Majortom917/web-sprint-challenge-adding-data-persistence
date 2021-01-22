// build your `/api/resources` router here
const express = require('express');

const router = express.Router();
const Resource = require('./model')

router.get("/", (req, res) => {
   Resource.list()
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(err =>{
        res.status(500).json({error: err.message})
    })
  });
  router.post("/", (req, res) => {
    Resource.add(req.body)
      .then(resource => {
        res.status(201).json(req.body);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
 
module.exports = router;
