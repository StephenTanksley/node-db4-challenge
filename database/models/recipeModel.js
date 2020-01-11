const db = require('../data/db-config')

const getRecipes = async () => {
    await db('recipes').select()
}

const getShoppingList = async (recipe_id) => {
    await db('ingredients as i')
        .join('recipes_ingredients as r_i', 'r_i.ingredients_id', 'i.id').where('r_i.recipe_id', recipe_id)
}

const getInstructions = async (recipe_id) => {
    await db('instructions')
        .where(recipe_id)
        .orderBy('id', 'ASC')
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}