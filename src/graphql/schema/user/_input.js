// Input types are used as arguments for Mutations and Queries.

const newUserDetails = `
	input newUserDetails {
		username: String!
		password: String!
		email: String!
		isCandidate: Boolean
		isReference: Boolean
		isEmployer: Boolean
	}
`;

export default () => [newUserDetails];
