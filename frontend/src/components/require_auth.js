import React, { Component } from 'react';
import { CURRENT_USER } from '../api/user_api';

export default function(ComposedComponent) {
	class Authentication extends Component {
		verifyPermissions() {
			this.props.client.query({
				query: CURRENT_USER,
				variables: null,
			})
				.then(({ data }) => {
					if (data.currentUser === null || data.currentUser.id === null) {
						this.props.history.push('/');
						this.props.client.resetStore();
					}
				})
				.catch(err => {
					this.props.history.push('/');
					this.props.client.resetStore();
					console.log(err.message);
				});
		}

		componentDidMount() {
			this.verifyPermissions();
		}

		componentDidUpdate(nextProps) {
			this.verifyPermissions();
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	return Authentication;
}
