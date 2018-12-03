import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import '../App.css';

const LIST_USERS = gql`
  query AllUsers {
    users {
      id
      username
      email
      userType {
        isCandidate
        isEmployer
        isReference
      }
    }
  }
`

export default () => (
  <Query query={LIST_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error...</p>;

      return (
        <div className="col-sm-12">
          {!loading &&
            data.users.map(user => (
              <div className="col-sm-4" key={user.id}>
                <div>
                  <div className='book'>
                    <h3 align="center"> { user.username }&nbsp; </h3>
                    <h4 align="center">Email:  { user.email } </h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }}
  </Query>
);