const { combineResolvers } = require('graphql-resolvers');
const { filter } = require('lodash');
const { isAuthenticated } = require('../sharedResolvers/authorization');
const models = require('../../../../db/models');

// NOTE: id arguments must be passed as Int and not ID
const Query = `
 extend type Query {
   users: [User]
   currentUser: User
   user(input: userSearchInput!): User
   candidates: [User]
   references: [User]
   employers: [User]
 }
`;

const queryUserType = async(key) => {
	return await models.user.findAll({
		include: models.usertype,
	}).then((users) => {
		return filter(users, function(user) {
			return user.usertype && user.usertype[key] === true;
		});
	});
};

export const queryTypes = () => [Query];

export const queryResolvers = {
	Query: {
		users: combineResolvers(
			isAuthenticated,
			async(parent, args, context, info) => {
				return await models.user.findAll();
			},
		),
		currentUser: combineResolvers(
			isAuthenticated,
			async(parent, args, context, info) => {
				return context.me;
			}
		),
		user: async(parent, args, context, info) => {
			args = args.input;
			return await models.user.findOne({
				where: args,
			});
		},
		candidates: async(parent, args, context, info) => {
			return queryUserType('isCandidate');
		},
		references: (parent, args, context, info) => {
			return queryUserType('isReference');
		},
		employers: (parent, args, context, info) => {
			return queryUserType('isEmployer');
		},
	},
};
