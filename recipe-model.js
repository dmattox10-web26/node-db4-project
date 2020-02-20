const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('Recipes')
}

function getShoppingList(recipe_id) {
    return db('Recipes')
    .join('Ingredients', 'Recipes.id', 'Ingredients.recipe_id')
    .select('Ingredients.name')
}

function getInstructions(recipe_id) {
    return db('Recipes')
    .join('Steps', 'Recipes.id', 'Steps.recipe_id')
    .select('Steps.step_num', 'Steps.step_desc')
}