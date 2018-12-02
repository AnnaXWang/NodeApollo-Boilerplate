import models from '../../../../db/models';

const Query = `
 extend type Query {
   usertypes: [UserType]
   usertype(id: Int): UserType
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
	Query: {
		usertypes: async(parent, args, context, info) => {
			return await models.usertype.findAll();
		},
		usertype: async(parent, args, context, info) => {
			return await models.usertype.findOne({
				where: args,
			});
		},
	},
};
