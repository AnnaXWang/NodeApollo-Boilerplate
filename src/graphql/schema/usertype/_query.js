import { usertypes } from '../staticdata';

const Query = `
 extend type Query {
   usertypes: [UserType]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    usertypes: () => usertypes,
  },
};
