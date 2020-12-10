
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'cake', description: 'a tasty cake' },
        {recipe_name: 'pie', description: 'a tasty pie' },
        {recipe_name: 'pudding', description: 'a tasty pudding'}
      ]);
    });
};
