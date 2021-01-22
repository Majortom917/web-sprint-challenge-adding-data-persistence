// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
    add,
    list,
};


function add(task){
    return db('tasks').insert(task);
};

function list(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes');
}
