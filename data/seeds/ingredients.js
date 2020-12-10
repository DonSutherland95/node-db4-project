
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_name: 'cake mix'},
        {ingredients_name: 'pudding mix'},
        {ingredients_name: 'pie mix'}
      ]);
    });
};
