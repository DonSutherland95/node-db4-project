
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {steps_text: 'add ingredients to bowl', recipe_id: 1 },
        {steps_text: 'add ingredients to pan', recipe_id: 2},
        {steps_text: 'add ingredients to container', recipe_id: 3}
      ]);
    });
};
