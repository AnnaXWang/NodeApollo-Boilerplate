import { users } from '../staticdata';

const Query = `
 extend type Query {
   users: [User]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    users: () => users,
  },
};
