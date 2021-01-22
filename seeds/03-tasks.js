
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: 'test1',project_id:'1'},
        { task_description: 'test2',project_id:'1'},
        { task_description: 'test3',project_id:'2'},
      ]);
    });
};
