import { users, usertypes } from '../staticdata';
import { filter, find } from 'lodash';

// NOTE: id arguments must be passed as Int and not ID
const Query = `
 extend type Query {
   users: [User]
   user(id: Int, username: String): User
   candidates: [User]
   references: [User]
   employers: [User]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    users: () => users,
    user: (parent, args, context, info) => {
      return find(users, args);
    },
    candidates: (parent, args, context, info) => {
      const candidateUserTypes = filter(usertypes, {candidate: true});
      const candidateUserTypeIds = candidateUserTypes.map(a => a.id);
      return filter(users, function(o) {
        return candidateUserTypeIds.indexOf(o.userTypeId) >= 0;
      });
    },
    references: (parent, args, context, info) => {
      const referenceUserTypes = filter(usertypes, {reference: true});
      const referenceUserTypeIds = referenceUserTypes.map(a => a.id);
      return filter(users, function(o) {
        return referenceUserTypeIds.indexOf(o.userTypeId) >= 0;
      });
    },
    employers: (parent, args, context, info) => {
      const employerUserTypes = filter(usertypes, {employer: true});
      const employerUserTypeIds = employerUserTypes.map(a => a.id);
      return filter(users, function(o) {
        return employerUserTypeIds.indexOf(o.userTypeId) >= 0;
      });
    },
  },
};
