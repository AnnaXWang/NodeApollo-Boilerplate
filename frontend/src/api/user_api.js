import { gql } from 'apollo-boost';

const LIST_USERS = gql`
	query AllUsers {
		users {
			id
			username
			email
			userType {
				isCandidate
				isEmployer
				isReference
			}
		}
	}
`;

const ADD_USER = gql`
	mutation addUser(
		$username: String!, 
		$email: String!, 
		$password: Float!, 
		$isCandidate: Boolean, 
		$isEmployer: Boolean, 
		$isReference: Boolean
	){
		addUser(
			input: {
			username: $username,
			email: $email,
			password: $password,
			isCandidate: $isCandidate,
			isEmployer: $isEmployer,
			isReference: $isReference
		}) {
			token
		}
	}
`;

const SIGNIN = gql`
	mutation signIn($email: String!, $password: String!){
			signIn(input: { email: $email,  password: $password}){
					token
			}
	}
`;

// const queries = () => [ADD_USER];
const mutations = {
	ADD_USER: ADD_USER,
	SIGNIN: SIGNIN,
};

const queries = {
	LIST_USERS: LIST_USERS,
};

const combined_export = {
	mutations: mutations,
	queries: queries,
};

export default combined_export;
