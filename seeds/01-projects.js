
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'test1', project_description: 'test1', project_completed: '' },
        { project_name: 'test2', project_description: 'test2', project_completed: 'false' },
        { project_name: 'test3', project_description: 'test3', project_completed: 'true' },
      ]);
    });
};
