/*
 We’ll define here the mutations and
 the associated resolvers to each mutation type
*/
import jwt from 'jsonwebtoken';
import { AuthenticationError, UserInputError } from 'apollo-server';
import models from '../../../../db/models';

const Mutation = `
  extend type Mutation {
	
	addUser(
		input: newUserInput!
	): Token!

	signIn(
		input: signInInput!
	): Token!
  }
`;

export const mutationTypes = () => [Mutation];

const createToken = async(user, secret, expiresIn) => {
	const { id, email, username } = user;
	return await jwt.sign({ id, email, username }, secret, {
		expiresIn,
	});
};

export const mutationResolvers = {
	Mutation: {
		addUser: (parent, args, context, info) => {
			args = args.input;
			const newUser = {
				username: args.username,
				password: args.password,
				email: args.email,
			};
			return new Promise(function(resolve, reject) {
				// create transaction to create a new user and a new usertype
				let returnedUser;
				return models.sequelize.transaction(function(t) { // chain all queries here
					return models.user.create(newUser, {transaction: t})
						.then(function(user) {
							returnedUser = user;
							return models.usertype.create({
								userId: returnedUser.id,
								isCandidate: args.isCandidate,
								isReference: args.isReference,
								isEmployer: args.isEmployer,
							}, {transaction: t});
						});
				}).then(function(result) {
				  // Transaction has been committed
				  resolve({
						token: createToken(returnedUser, context.secret, '30m'),
				  });
				}).catch(function(err) {
				  // Transaction has been rolled back
				  reject(err);
				});
			});
		},

		signIn: (parent, args, context, info) => {
			console.log("signin")
			args = args.input;
			console.log(args)
			return new Promise(function(resolve, reject) {
				return models.user.findOne({
					where: {email: args.email},
				}).then(function(user) {
					if (!user) {
						reject(UserInputError(
						  'No user found with this login credentials.',
						));
					}

					return user.validatePassword(args.password)
						.then(function(isValid) {
							if (!isValid) {
								reject(
									new AuthenticationError('Invalid password.')
								);
							}
							const secret = context.secret;
							const newToken = createToken(user, secret, '30m');
							resolve({
								token: newToken,
							});
						}).catch(function(err) {
						  reject(err);
						});
				}).catch(function(err) {
				  reject(err);
				});
			});
		},

	},
};
