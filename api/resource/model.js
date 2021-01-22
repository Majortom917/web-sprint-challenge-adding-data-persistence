// build your `Resource` model here
const db = require("../../data/dbConfig.js");

module.exports = {
    add,
    list,
};


function add(res){
    return db('resources').insert(res);
};

function list(){
    return db('resources');
}