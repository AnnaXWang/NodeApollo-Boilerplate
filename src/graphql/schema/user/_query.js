const Query = `
 extend type Query {
   users: [User]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
 Query: {
   users: () => ([
     {
       username: "Harry Potter and the Sorcerer's stone",
       password: 'J.K. Rowling',
     },
     {
       username: 'Jurassic Park',
       password: 'Michael Crichton',
     },
   ])
 }
};