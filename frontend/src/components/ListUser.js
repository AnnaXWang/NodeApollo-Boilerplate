import React, { Component} from 'react';
import { Query } from 'react-apollo';
import '../App.css';

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



// export default () => (
// 	<Query query={LIST_USERS}>
// 		{({ loading, error, data }) => {
// 			if (loading) return <p>Loading...</p>;
// 			if (error) return <p>Error...</p>;
// 			return (
// 				<div className="col-sm-12">
// 					{!loading &&
// 						data.users.map(user => (
// 							<div className="col-sm-4" key={user.id}>
// 								<div>
// 									<div className='book'>
// 										<h3 align="center"> { user.username } </h3>
// 										<h4 align="center">Email:  { user.email } </h4>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 				</div>
// 			);
// 		}}
// 	</Query>
// );
