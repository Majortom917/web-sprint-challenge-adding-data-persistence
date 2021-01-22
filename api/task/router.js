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

  router.get('/:id', (req, res) => {
    const id = req.params.id
    Task.getById(id)
        .then(task => {
            if (!task) {
                res.status(404).json({ message: `Task with ID ${id} not found` })
            } else {
                res.status(200).json({ task })
            }
        })
        .catch (err => {
            res.status(500).json({ error: err.message })
        })
})

  router.post("/", (req, res) => {
    Task.add(req.body)
    .then(ids => {
          const id = ids[0]
          return Task.getById(id)
    }).then( task =>{

          console.log(task)
        res.status(201).json({task});
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
})
 
module.exports = router;