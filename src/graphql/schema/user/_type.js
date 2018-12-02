import models from '../../../../db/models';

const User = `
 type User {
   id: ID!
   username: String!
   password: String!
   email: String!
   isActive: Boolean!
   userType: UserType!
 }
`;

export const types = () => [User];

export const typeResolvers = {
	User: {
		// describes how the userType field will be filled
		userType: async(user, args, context, info) => {
			return await models.usertype.findOne({
				where: { userId: user.id },
			});

		},
	},
};
