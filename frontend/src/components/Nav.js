import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						Boilerplate
					</Link>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Link to="/users">All Users</Link>
					</li>
					<li>
						<Link to="/create">Create a User</Link>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<Link to="/login">
						 <button className="btn btn-info log">
								Login
						 </button>
				 </Link>
				</ul>
			</nav>
		);
	}
}

export default withRouter(Nav);
