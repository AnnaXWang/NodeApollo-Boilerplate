import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import '../App.css';
import queries from '../api_queries/user_queries';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  render () {
    return (
      <div className="container">

        <Mutation 
          mutation={queries.SIGNIN}
          onCompleted= { 
            (response) => {
              console.log(response)
              this.setState({email: '', password: ''})
            }
          } 
        >
          {signIn => (
            <form
              onSubmit={e => {
                e.preventDefault();
                const input = {
                  email: this.state.email, 
                  password: this.state.password
                };
                signIn({ variables: input });
              }}
            >
              <label>
                Email:
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
              <label>
                Password:
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
              <button type="submit">Add Todo</button>
              </form>
              )}
        </Mutation>
      </div>
    )
  }
}

export default Login;

