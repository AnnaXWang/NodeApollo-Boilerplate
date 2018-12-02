module.exports = (sequelize, DataTypes) => {
	const Usertype = sequelize.define('usertype', {
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
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	}, {});

	Usertype.associate = function(models) {
		Usertype.belongsTo(models.user,
			{foreignKey: 'id', target_key: 'userId'}
		);
	};
	return Usertype;
};
