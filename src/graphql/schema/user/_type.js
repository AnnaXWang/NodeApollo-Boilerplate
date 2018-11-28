const User = `
 type User {
   username: String!
   password: String!
   candidate: Int!
   employer: Int!
   referencer: Int!
 }
`;

export const types = () => [User];

export const typeResolvers = {

};
