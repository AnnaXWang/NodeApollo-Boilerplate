module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			temp_password: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			details: {
				type: Sequelize.JSONB,
			},
			isActive: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	},
};
