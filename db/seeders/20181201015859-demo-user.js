module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('users', [{
			username: 'John',
			password: 'Doe',
			email: 'demo@demo.com',
		}], {})
			.then( => {
				return queryInterface.bulkInsert('usertypes', [{
					userId: 1,
					isCandidate: true,
				}], {})
			});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('users', null, {});
	},
};
