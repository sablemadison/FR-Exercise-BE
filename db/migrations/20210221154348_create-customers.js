
exports.up = function(knex) {
    return knex.schema.createTable('customers', (tbl) => {
        tbl.increments();
  
        tbl.string('username', 255).notNullable().unique();
        tbl.string('password', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('transactions')
    .dropTableIfExists('customers')
};
