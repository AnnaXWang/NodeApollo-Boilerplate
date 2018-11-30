
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('usertypes', table => {
      table.increments('id').primary();
      table.boolean('isCandidate').notNullable().defaultTo(false);
      table.boolean('isReference').notNullable().defaultTo(false);
      table.boolean('isEmployer').notNullable().defaultTo(false);
      table.integer('user_id').references('users.id').notNullable().unsigned()
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('usertypes'),
  ]);
};
