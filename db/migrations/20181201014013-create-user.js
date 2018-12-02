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
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			temp_password: {
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			details: {
				type: Sequelize.JSONB,
			},
			isActive: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: true,
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
		},
		{
			uniqueKeys: {
		        active_user_unique: {
		            fields: ['isActive', 'email'],
		        },
		    },
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	},
};
