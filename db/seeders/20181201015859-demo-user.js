module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('users', [{
			username: 'John',
			password: 'Doe',
			email: 'demo@demo.com',
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('users', null, {});
	},
};
