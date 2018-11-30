module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('User', [{
			username: 'John Doe',
			email: 'testuser@gmail.com',
			password: 'password',
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('User', null, {});
	},
};
