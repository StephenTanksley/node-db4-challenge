exports.seed = function(knex) {
  return knex('recipes_ingredients').del()
    .then(function () {
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredients_id: 1, quantity: 1, uom: "lb"},
        {recipe_id: 1, ingredients_id: 2, quantity: 2, uom: "slices"},
        {recipe_id: 1, ingredients_id: 3, quantity: 1, uom: "loaf"},
        {recipe_id: 2, ingredients_id: 4, quantity: 4, uom: "ounces"},
        {recipe_id: 2, ingredients_id: 5, quantity: 1, uom: "dozen"},
        {recipe_id: 2, ingredients_id: 6, quantity: 4, uom: "tortillas"},
        {recipe_id: 2, ingredients_id: 7, quantity: 1, uom: "bottle"},
        {recipe_id: 2, ingredients_id: 8, quantity: 4, uom: "slices"},
      ]);
    });
};