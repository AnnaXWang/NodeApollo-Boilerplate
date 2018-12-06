import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import '../App.css';
import { mutations, queries } from '../api/user_api';

class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			username: '',
			isCandidate: false,
			isReference: false,
			isEmployer: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleCheckboxChange(event) {
		const newValue = !this.state[event.target.name];
		this.setState({ [event.target.name]: newValue });
	}

	render() {
		return (
			<div className="container">

				<Mutation
					mutation={mutations.ADD_USER}
					onCompleted={
						(response) => {
							if (response.addUser.token){
								this.setState({email: '', password: ''});
								this.props.history.push('/users');
							}
						}
					}
					update={
						(cache, { data: {addUser} }) => {
							const { user } = cache.readQuery({ query: queries.LIST_USERS });
							cache.writeQuery({
			          query: queries.LIST_USERS,
			          data: { user: user.concat([addUser]) }
			        });
						}
				    // this.props.updateStoreAfterVote(store, vote, this.props.link.id)
				  }
				>
					{addUser => (
						<form
							onSubmit={e => {
								e.preventDefault();
								const args = {
									input: {
										email: this.state.email,
										password: this.state.password,
										username: this.state.username,
										isCandidate: this.state.isCandidate,
										isReference: this.state.isReference,
										isEmployer: this.state.isEmployer,
									},
								};
								addUser({ variables: args });
							}}
						>
							<label>
								Email:
								<input
									type="text"
									name="email"
									value={this.state.email}
									onChange={this.handleChange}/>
							</label>
							<label>
								Username:
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleChange}/>
							</label>
							<label>
								Password:
								<input
									type="text"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}/>
							</label>
							<br/>
							<input
								type="checkbox"
								name="isCandidate"
								onChange={this.handleCheckboxChange} /> Candidate <br/>
						  <input
						  type="checkbox"
						  name="isEmployer"
						  onChange={this.handleCheckboxChange} /> Employer <br/>
						  <input
						  type="checkbox"
						  name="isReference"
						  onChange={this.handleCheckboxChange} /> Reference <br/>
							<button type="submit">Create</button>
						</form>
					)}
				</Mutation>
			</div>
		);
	}
}

export default CreateUser;
