exports.up = async function(knex) {
  await knex.schema.createTable('instructions', (table) => {
      table.increments('id')
      table.string('step').notNullable()
      table.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('instructions')
};