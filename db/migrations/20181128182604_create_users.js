
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email').notNullable(); // email will serve as login
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.text('details');
      table.integer('status').notNullable().defaultTo(0);
      table.string('temp_password');
      table.unique(['email', 'status']);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
  ]);
};
