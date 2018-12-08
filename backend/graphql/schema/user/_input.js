// Input types are used as arguments for Mutations and Queries.
const newUserInput = `
	input newUserInput {
		username: String!
		password: String!
		email: String!
		isCandidate: Boolean
		isReference: Boolean
		isEmployer: Boolean
	}
`;

const signInInput = `
	input signInInput {
		password: String!
		email: String!
	}
`;

const userSearchInput = `
	input userSearchInput {
		id: Int
		username: String
		email: String
	}
`;

export default () => [newUserInput, signInInput, userSearchInput];
