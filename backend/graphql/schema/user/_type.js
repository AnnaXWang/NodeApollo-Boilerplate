const models = require('../../../../db/models');

const User = `
 type User{
   id: ID!
   username: String!
   password: String!
   email: String!
   isActive: Boolean!
   userType: UserType!
   createdAt: Date!
   updatedAt: Date!
 }
`;

const Token = `
 type Token {
   token: String!
 }
`;

const signInOutput = `
 type signInOutput {
   token: String!
   user: User!
 }
`;

export const types = () => [User, Token, signInOutput];

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
