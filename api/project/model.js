// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
    add,
    list,
};


function add(project){
    return db('projects').insert(project);
};

function list(){
    return db('projects');
};
