import { users } from '../staticdata';
import { find } from 'lodash';

const Query = `
 extend type Query {
   users: [User]
   user(id: Int, username: String, password:String, userTypeId: Int): User
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    users: () => users,
    user: (parent, args, context, info) => {
      return find(users, args);
    },
  },
};
