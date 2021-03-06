import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import '../App.css';
import { SIGNIN, CURRENT_USER } from '../api/user_api';

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
					mutation={SIGNIN}
					onCompleted={
						(response) => {
							if (response.signIn.token){
								this.setState({email: '', password: ''});
								localStorage.setItem('token', response.signIn.token);
								this.props.history.push('/users');
							}
						}
					}
					update={async(cache, { data: { signIn } }) => {
						if (signIn.token){
							await cache.reset();
							cache.writeQuery({
								query: CURRENT_USER,
								data: { currentUser: signIn.user },
							});
						}
					}}
				>
					{signIn => (
						<form
							onSubmit={e => {
								e.preventDefault();
								const args = {
									input: {
										email: this.state.email,
										password: this.state.password,
									},
								};
								signIn({ variables: args });
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

Login.propTypes = {
	history: PropTypes.object,
};

export default Login;
