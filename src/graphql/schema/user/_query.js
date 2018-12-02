import { filter } from 'lodash';
import models from '../../../../db/models';

// NOTE: id arguments must be passed as Int and not ID
const Query = `
 extend type Query {
   users: [User]
   user(id: Int, username: String): User
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
		users: async(parent, args, context, info) => {
			return await models.user.findAll();
		},
		user: async(parent, args, context, info) => {
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
