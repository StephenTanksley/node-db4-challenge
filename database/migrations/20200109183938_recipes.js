exports.up = async function(knex) {
    await knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.string('name', 128).notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes')
};