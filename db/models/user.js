module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: 'A username must have some text',
				},
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: 'A password must have some text',
				},
			},
		},
		temp_password: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: {
					args: true,
					msg: 'An email must be formatted correctly',
				},
			},
		},
		details: {
			type: DataTypes.JSONB,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.fn('NOW'),
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.fn('NOW'),
		},
	}, {});

	User.associate = function(models) {
		User.hasOne(models.usertype, {foreignKey: 'userId'});
	};
	return User;
};
