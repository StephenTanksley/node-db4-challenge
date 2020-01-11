-- This is the query to retrieve all recipes.
SELECT * FROM recipes;

-- This is the query to select a recipe by its ID.

SELECT * FROM recipes
WHERE id

--This is the query for getShoppingList(recipe_id)
SELECT * FROM instructions
WHERE recipe_id = 2
ORDER BY id ASC;


