import { usertypes } from '../staticdata';
import { find } from 'lodash';

const Query = `
 extend type Query {
   usertypes: [UserType]
   usertype(id: Int): UserType
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    usertypes: (parent, args, context, info) => usertypes,
    usertype: (parent, args, context, info) => {
      return find(usertypes, args);
    },
  },
};
