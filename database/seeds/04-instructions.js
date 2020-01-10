
exports.seed = function(knex) {
  return knex('instructions').del()
    .then(function () {
      return knex('instructions').insert([
        {id: 1, step: 'Preheat olive oil in pan', recipe_id: 1},
        {id: 2, step: 'Toast 2 slices of bread with ham and cheese on top', recipe_id: 1},
        {id: 3, step: 'Place one slice of toasted bread on the other. Feast! Dance!', recipe_id: 1},
        {id: 4, step: 'Warm tortillas in microwave for 60 seconds.', recipe_id: 2},
        {id: 5, step: 'Cook bacon in medium saucepan on medium heat. Once done, set aside bacon fat, dividing in half. Add 1 tbsp olive oil to bacon pan and mix with one half of set-aside bacon fat.', recipe_id: 2},
        {id: 6, step: 'Pour the remaining bacon fat in another heavy-bottomed pan on high heat.', recipe_id: 2},
        {id: 7, step: 'Sautee mushrooms in heavy-bottomed pan.', recipe_id: 2},
        {id: 8, step: 'Crumble warm bacon strips over mushrooms and remove from heat. Season with salt and pepper.', recipe_id: 2},
        {id: 9, step: 'Crack four eggs into a small bowl, whisking until scrambled thoroughly.', recipe_id: 2},
        {id: 10, step: 'Pour eggs into medium saucepan over medium-low heat, turning frequently until done.', recipe_id: 2},
        {id: 11, step: 'Remove tortillas from microwave, place eggs in tortilla, top with mushroom and bacon, and season with salt, pepper, and hot sauce. Bon appetite!', recipe_id: 2},
      ]);
    });
};