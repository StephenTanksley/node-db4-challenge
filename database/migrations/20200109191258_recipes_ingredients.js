exports.up = async function(knex) {
  await knex.schema.createTable('recipes_ingredients', (table) => {
    table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.integer('ingredients_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.integer('quantity')
        .notNullable()
        .unsigned()
    table.string('uom', 128)
        .notNullable()
    table.primary(['recipe_id', 'ingredients_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes_ingredients')
};
