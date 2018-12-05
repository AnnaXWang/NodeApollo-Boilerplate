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
	mutation addUser($input: newUserInput!){
		addUser(input: $input){
			token
		}
	}
`;

const SIGNIN = gql`
	mutation signIn($input: signInInput!){
		signIn(input: $input){
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
