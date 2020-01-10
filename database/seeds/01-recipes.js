
exports.seed = async (knex) =>  {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'Ham and cheese sandwich'},
        {id: 2, name: 'Breakfast tacos'},
      ]);
    });
};