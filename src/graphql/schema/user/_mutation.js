/*
 We’ll define here the mutations and
 the associated resolvers to each mutation type
*/
import { usertypes } from '../staticdata';
import { _ } from 'lodash';

const Mutation = `
  extend type Mutation {
  	addUser(username: String!, password: String!): User
  }
`;

let nextId = _.max(usertypes.map(a => a.id)) + 1;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
  Mutation: {
    addUser: (parent, args, context, info) => {
      const newUser = { 
      	id: nextId++, 
      	username: args.username, 
      	password: args.password 
      };
      usertypes.push(newUser);
      return newUser;
    },
  },
};
