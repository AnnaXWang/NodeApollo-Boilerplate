import Sequelize from 'sequelize';

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		dialect: 'postgres',
		operatorsAliases: Sequelize.Op,
	},
);

const models = {
	User: sequelize.import('./user'),
	Usertype: sequelize.import('./usertype'),
};

Object.keys(models).forEach(key => {
	if ('associate' in models[key]) {
		models[key].associate(models);
	}
});

export { sequelize };

export default models;
