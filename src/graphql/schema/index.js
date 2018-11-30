import fs from 'fs';
import path from 'path';
import { merge } from 'lodash';

/*
Create a base Query to be extended to query the data
*/
const Query = `
  type Query {
    status: String
  }
`;

/*
Create a base Mutation to be extended to update data
*/
const Mutation = `
  type Mutation {
    _empty: String
  }
`;

/*
 Create a base Mutation to be extended to define how
 queries/mutations will be handled
*/
let resolvers = {
	Query: {
		status: () => 'ok',
	},
};

const typeDefs = [Query, Mutation];

/*
 Read all nested schema directores in the current directory
 and load types and resolvers automatically
*/
fs.readdirSync(__dirname)
	.filter(dir => (dir.indexOf('.') < 0))
	.forEach((dir) => {
    const tmp = require(path.join(__dirname, dir)).default; // eslint-disable-line
		resolvers = merge(resolvers, tmp.resolvers);
		typeDefs.push(tmp.types);
	});

/*
 Exports the schema to be used by the Apollo Server
*/
export {
	typeDefs,
	resolvers,
};
