
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        {steps_id: 1, ingredients_id: 3, quantity:6},
        {steps_id: 2, ingredients_id: 2, quantity:7},
        {steps_id: 3, ingredients_id: 1, quantity: 8}
      ]);
    });
};
