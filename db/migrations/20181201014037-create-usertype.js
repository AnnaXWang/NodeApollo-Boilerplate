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
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('usertypes');
	},
};
