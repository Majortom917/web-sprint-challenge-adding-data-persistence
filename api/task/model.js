// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
    add,
    list,
    getById
};
function getById(t_id) {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.p_id')
        .select('t.t_id', 't.task_description', 't.task_notes', 't.task_completed', 't.project_id', 'p.project_name', 'p.project_description')
        .where({t_id })
        .first()
}

function add(task){
    return db('tasks').insert(task);
};

function list(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p_id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes');
}
