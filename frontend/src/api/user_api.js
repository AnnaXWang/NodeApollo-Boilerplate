import { gql } from 'apollo-boost';

export const LIST_USERS = gql`
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

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      username
      email
    }
  }
`;

export const ADD_USER = gql`
	mutation addUser($input: newUserInput!){
		addUser(input: $input){
			token
		}
	}
`;

export const SIGNIN = gql`
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