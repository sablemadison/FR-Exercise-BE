
exports.up = function(knex) {
    return knex.schema.createTable('transactions', (tbl) => {
        tbl.increments();
        tbl.integer('customer_id').unsigned().notNullable().references('id').inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.string('payer', 255).notNullable();
        tbl.integer('points', 255).notNullable();
        tbl.timestamps(false,true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('transactions')
};
