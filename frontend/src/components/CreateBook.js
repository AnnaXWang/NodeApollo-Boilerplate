import React from 'react';
import { Mutation } from "react-apollo";
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
class CreateBook extends Component {
	constructor (props) {
    super(props);
    this.state = {
      email : "",
			username : "",
			password : "",
			isReference : null,
			isEmployer : null,
			isCandidate : null,
    }
	}

// render () {

// 	<Mutation mutation={ADD_USER} onCompleted={() => window.location.href="/" }>
// 			{(addUser, { data, loading, error }) => (
// 				<div>
// 					<div className='w-100 pa4 flex justify-center'>
// 						<form
// 							onSubmit={e => {
// 								console.log(e)
// 								e.preventDefault();
// 								addUser({ variables: {
// 									email: this.email.value,
// 									username: this.username.value,
// 									password: parseFloat(this.password.value),
// 									isCandidate: this.isCandidate.value,
// 									isReference: this.isReference.value,
// 									isEmployer: this.isEmployer.value,
// 								}});
// 								this.setState({email: "", username: "", password: "", isReference: false, isEmployer: false, isCandidate: false})
// 							}}
// 						>
// 						<div style={{ maxWidth: 400 }} className=''>
// 							<label> Email: </label>
// 							<input
// 								className='w-100 pa3 mv2'
// 								type="text"
// 								required
// 								placeholder='janedoe@gmail.com'
// 								ref={node => this.setState({email: node}) } />

// 							<label> Username: </label>
// 							<input
// 								className='w-100 pa3 mv2'
// 								type="text"
// 								required
// 								placeholder='Jane Doe'
// 								ref={node => this.setState({username: node})} />

// 							<label> Password: </label>
// 							<input
// 								className='w-100 pa3 mv2'
// 								type="password"
// 								required
// 								min="1"
// 								max="10"
// 								placeholder='1234567'
// 								ref={node => this.setState({password: node})} />

// 							<label> Candidate? </label>
// 							<select
// 								ref={select => this.isCandidate = select}
// 								name="isCandidate" required>
// 								<option value="">Select a value</option>
// 								<option value="true">Yes</option>
// 								<option value="false">No</option>
// 							</select>

// 							<label> Reference? </label>
// 							<select
// 								ref={select => this.isReference = select}
// 								name="isReference" required>
// 								<option value="">Select a value</option>
// 								<option value="true">Yes</option>
// 								<option value="false">No</option>
// 							</select>

// 							<label> Employer? </label>
// 							<select
// 								ref={select => this.isEmployer = select}
// 								name="isEmployer" required>
// 								<option value="">Select a value</option>
// 								<option value="true">Yes</option>
// 								<option value="false">No</option>
// 							</select>
// 						</div>

// 						{loading && <p>Loading...</p> }
// 						{error && <p>Error :( Please try again</p>}

// 						<button type="submit">Add Book</button>
// 						</form>
// 					</div>
// 				</div>
// 			)}
// 	</Mutation>
// }