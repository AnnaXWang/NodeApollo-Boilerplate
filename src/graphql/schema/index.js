import fs from 'fs';
import path from 'path';
import { merge } from 'lodash';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

/*
Create a base Query to be extended to query the data
*/
const Query = `
	type Query {
		status: String
	}
`;

const Scalar = `
	scalar Date
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
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		parseValue(value) {
			return new Date(value); // value from the client
		},
		serialize(value) {
			return value.getTime(); // value sent to the client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(ast.value, 10); // ast value is always in string format
			}
			return null;
		},
	}),
};

const typeDefs = [Query, Mutation, Scalar];

/*
 Read all nested schema directores in the current directory
 and load types and resolvers automatically
*/
fs.readdirSync(__dirname)
	.filter(dir => {
		return dir.indexOf('.') < 0 && dir.indexOf('sharedResolvers') < 0
	})
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
