import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import Nav from './components/Nav'; // Nav is the top navbar
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const NavWithClient = withApollo(Nav);
		return (
			<div>
				<NavWithClient/>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/users' component={ListUser} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/create' component={CreateUser} />
			</div>
		);
	}
}

export default App;
