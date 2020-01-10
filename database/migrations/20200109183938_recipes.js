exports.up = async function(knex) {
    await knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.string('recipe name').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes')
};