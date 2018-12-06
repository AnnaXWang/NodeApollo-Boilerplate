import React, {Component} from 'react';
import { Query } from 'react-apollo';
import '../App.css';
import {queries} from '../api/user_api';

class ListUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div className="container">
				<Query query={ queries.LIST_USERS }>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) {
							return <p>Error...</p>;
						}
						return (
							<div className="col-sm-12">
								{!loading &&
									data.users.map(user => (
										<div className="col-sm-4" key={user.id}>
											<div>
												<div className='book'>
													<h3 align="center"> { user.username } </h3>
													<h4 align="center">Email:  { user.email } </h4>
												</div>
											</div>
										</div>
									))}
							</div>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default ListUser;
