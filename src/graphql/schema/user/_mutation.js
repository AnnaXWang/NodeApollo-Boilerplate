/*
 We’ll define here the mutations and
 the associated resolvers to each mutation type
*/
import models from '../../../../db/models';

const Mutation = `
  extend type Mutation {
	addUser(username: String!, password: String!, email: String!): User
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
	Mutation: {
		addUser: (parent, args, context, info) => {
			const newUser = {
				username: args.username,
				password: args.password,
				email: args.email,
			};
			return new Promise(function(resolve, reject) {
				models.user.create(newUser)
					.then(function(user) {
						resolve(user);
					}).catch(function(insertError) {
						reject(insertError);
					});
			});
		},
	},
};
