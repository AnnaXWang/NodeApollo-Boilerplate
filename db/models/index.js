const config = require('../../config/db_config');

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize;

if (process.env.DATABASE_URL){
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
	});
} else {
	const env_db = config[env];
	const name = env_db.database;
	const username = env_db.username;
	const pwd = env_db.password;
	sequelize = new Sequelize(name, username, pwd, env_db);
};

fs
	.readdirSync(__dirname)
	.filter(file => {
		const conditionalOne = file.indexOf('.') !== 0;
		const conditionalTwo = file !== basename;
		const conditionalThree = file.slice(-3) === '.js';
		return conditionalOne && conditionalTwo && conditionalThree;
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
