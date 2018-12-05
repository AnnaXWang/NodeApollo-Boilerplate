import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav'; // Nav is the top navbar
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/users' component={ListUser} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/create' component={CreateUser} />
			</div>
		);
	}
}

export default App;
