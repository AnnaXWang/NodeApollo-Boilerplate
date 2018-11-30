const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		uuid: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		temp_password: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		details: {
			type: DataTypes.JSONB,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		uniqueKeys: [
			{
				fields: ['email', 'isActive'],
			},
		],
	});

	User.associate = models => {
		User.hasOne(models.Usertype, { onDelete: 'CASCADE' });
	};

	return User;
};

export default user;
