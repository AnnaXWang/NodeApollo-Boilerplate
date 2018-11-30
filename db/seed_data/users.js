const bcrypt = require('bcryptjs');
const config = require('../../server_config');

const seed = parseInt(config.bcryptseed, 10);

module.exports = [
  {
    email: config.testemail,
    username: config.username,
    password: bcrypt.hashSync(config.testpassword, seed),
  },
];
