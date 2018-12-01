module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('usertypes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			isCandidate: {
				type: Sequelize.BOOLEAN,
			},
			isReference: {
				type: Sequelize.BOOLEAN,
			},
			isEmployer: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Usertypes');
	},
};
