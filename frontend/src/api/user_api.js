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

const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      username
      email
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
			user{
				id
				username
				email
			}
		}
	}
`;

// const queries = () => [ADD_USER];
export const mutations = {
	ADD_USER: ADD_USER,
	SIGNIN: SIGNIN,
};

export const queries = {
	LIST_USERS: LIST_USERS,
	CURRENT_USER: CURRENT_USER,
};

const combined_export = {
	mutations: mutations,
	queries: queries,
};

