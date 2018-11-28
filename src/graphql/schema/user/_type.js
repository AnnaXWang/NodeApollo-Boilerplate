import { find } from 'lodash';
import { usertypes } from '../staticdata';

const User = `
 type User {
   id: ID!
   username: String!
   password: String!
   userType: UserType!
 }
`;

export const types = () => [User];

export const typeResolvers = {
  User: {
    userType: (user, args, context, info) => {
      return find(usertypes, { id: user.userTypeId });
    },
  },
};
