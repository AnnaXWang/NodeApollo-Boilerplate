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
	}, {});
	return Usertype;
};
