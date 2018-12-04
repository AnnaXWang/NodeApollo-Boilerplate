import { gql } from "apollo-boost";

const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: Float!, $isCandidate: Boolean, $isEmployer: Boolean, $isReference: Boolean){
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
`

const SIGNIN = gql`
	mutation signIn($email: String!, $password: String!){
	    signIn(input: { email: $email,  password: $password}){
	        token
	    }
 	}
`

// const queries = () => [ADD_USER];
const queries = {
	ADD_USER : ADD_USER,
	SIGNIN : SIGNIN,
};

export default queries;