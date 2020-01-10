exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'ham'},
        {id: 2, ingredient: 'cheese'},
        {id: 3, ingredient: 'bread'},
        {id: 4, ingredient: 'mushrooms'},
        {id: 5, ingredient: 'eggs'},
        {id: 6, ingredient: 'tortillas'},
        {id: 7, ingredient: 'hot sauce'},
        {id: 8, ingredient: 'bacon'},
      ]);
    });
};