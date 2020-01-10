exports.up = async function(knex) {
    await knex.schema.createTable('ingredients', (table) => {
        table.increments('id')
        table.string('ingredient').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ingredients')
};