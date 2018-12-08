const bcrypt = require('bcrypt');
const server_config = require('../../config/server_config');

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
				len: {
					args: [7, 42],
					msg: 'A password must be between 7 and 42 characters',
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
	User.beforeCreate(async user => {
		user.password = await user.generatePasswordHash();
	});

	User.prototype.generatePasswordHash = async function() {
		const saltRounds = parseInt(server_config.bcryptseed, 10);
		return await bcrypt.hash(this.password, saltRounds);
	};

	User.prototype.validatePassword = async function(password) {
		return await bcrypt.compare(password, this.password);
	};

	User.associate = function(models) {
		User.hasOne(models.usertype, {foreignKey: 'userId'});
	};
	return User;
};
