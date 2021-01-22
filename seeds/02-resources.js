
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'test1',resource_description: 'test1',  },
        { resource_name: 'test2',resource_description: 'test2',  },
        { resource_name: 'test3',resource_description: 'test3',  },
      ]);
    });
};
