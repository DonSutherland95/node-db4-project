const db = require('../../data/dbConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .join('steps_ingredients as st', 's.steps_id', 'si.steps_id')
        .join('ingredients as i', 'i.ingredients_id', 'si.ingredients')
        .select('i.ingredients_name', 'si.quantity')
        .where('r.recipe_id', recipe_id)
}
function getInstructions(recipe_id){
    return db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .select('s.steps_text')
        .where('r.receipe_id', recipe_id)
}