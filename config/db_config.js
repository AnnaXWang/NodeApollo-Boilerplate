const Sequelize = require('sequelize');

module.exports = {
	development: {
		username: 'postgres',
		password: null,
		database: 'boilerplate_db',
		host: '127.0.0.1',
		dialect: 'postgres',
		operatorsAliases: Sequelize.Op,
	},
};
