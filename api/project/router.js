// build your `/api/projects` router here
const express = require('express');

//const Schemes = require('./scheme-model.js');

const router = express.Router();
const db = require('../data/dbConfig')

router.get("/api/project", (req, res) => {
    db('projects')
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
  });
 
module.exports = router;