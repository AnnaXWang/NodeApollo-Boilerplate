import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import '../App.css';
import user_api from '../api/user_api';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div className="container">

				<Mutation
					mutation={user_api.mutations.SIGNIN}
					onCompleted={
						(response) => {
							this.setState({email: '', password: ''});
						}
					}
				>
					{signIn => (
						<form
							onSubmit={e => {
								e.preventDefault();
								const input = {
									email: this.state.email,
									password: this.state.password,
								};
								signIn({ variables: input });
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
								Password:
								<input
									type="text"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}/>
							</label>
							<button type="submit">Login</button>
						</form>
					)}
				</Mutation>
			</div>
		);
	}
}

export default Login;

