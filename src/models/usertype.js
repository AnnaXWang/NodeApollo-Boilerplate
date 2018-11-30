const usertype = (sequelize, DataTypes) => {
	const Usertype = sequelize.define('usertype', {
		uuid: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
		isCandidate: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		isReference: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		isEmployer: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	});

	Usertype.associate = models => {
		Usertype.belongsTo(models.User);
	};

	return Usertype;
};

export default usertype;
