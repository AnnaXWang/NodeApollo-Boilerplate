import React, { Component } from 'react';
// import { Mutation } from 'react-apollo';
import '../App.css';
// const user_api = require('../api/user_api');

class BoilerplateComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div className="container">
				This is a boilerplate component
			</div>
		);
	}
}

export default BoilerplateComponent;

