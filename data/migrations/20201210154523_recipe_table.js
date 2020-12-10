
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table=>{
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable()
        table.string('description', 128).notNullable()
    })
    .createTable('steps', table=>{
        table.increments('steps_id')
        table.string('steps_text', 128).notNullable()
        // table.string('steps_order', 128).notNullable()
        table.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('steps_ingredients', table=>{
        table.increments('steps_ingredients_id')
        table.integer('steps_id')
            .unsigned().notNullable()
            .references('steps_id').inTable('steps')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.integer('ingredients_id')
            .unsigned().notNullable()
            .references('ingredients_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
         table.integer('quantity').notNullable()
    })
    .createTable('ingredients', table=>{
        table.increments('ingredients_id')
        table.string('ingredients_name', 128).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
