module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('usertypes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
		      type: Sequelize.INTEGER,
		      allowNull: false,
		      references: { model: 'users', key: 'id' },
		    },
			isCandidate: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
			isReference: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
			isEmployer: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				defaultValue: Sequelize.literal('NOW()'),
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				defaultValue: Sequelize.literal('NOW()'),
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('usertypes');
	},
};
