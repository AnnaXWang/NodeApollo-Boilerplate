import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { queries } from '../api/user_api';
import '../App.css';

class Nav extends Component {

	constructor(props){
		super(props);
		// const observable = this.props.client.watchQuery({
  //     query: queries.CURRENT_USER,
  //     fetchPolicy: 'cache-only',
  //   });
  //   observable.subscribe({
  //     next(res) {
  //      console.log(res)
  //     },
  //   });

	}

	renderButton = () => (
	  <Query query={queries.CURRENT_USER} fetchPolicy="network-only">
	    {({ client, loading, data}) => {
	      if (loading) {
	        return <p className="navbar-text navbar-right">Loading...</p>;
	      }
	      if (data) {
	        return (
	          <span>
	            <ul className="nav navbar-nav navbar-right"> 
                <button 
                	className="btn btn-info log"
                	onClick={() => {
	                  // call your auth logout code then reset store
	                  localStorage.setItem('token', '');
	                  client.resetStore();
	                }}
                	>
                  Logout
                </button>              
            	</ul>
	          </span>
	        );
	      }
	      return (
	        <ul className="nav navbar-nav navbar-right">
	           <Link to="/login">
	              <button className="btn btn-info log">
	                Login
	              </button>
	           </Link>
	      	</ul>
	      );
	    }}
	  </Query>
	);

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
				{this.renderButton()}
				
			</nav>
		);
	}
}

export default withRouter(Nav);
