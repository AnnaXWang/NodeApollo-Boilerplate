const usersData = require('../../seed_data/users');
const usertypesData = require('../../seed_data/usertypes');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(() => {
    return knex('usertypes').del();
  })
  .then(function() {
    return knex('users').insert(usersData);
  })
  .then(function() {
    return knex('usertypes').insert(usertypesData);
  });
};