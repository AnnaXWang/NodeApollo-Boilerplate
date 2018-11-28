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
        username: 'candidate1',
        password: 'password1',
        candidate: 1,
        referencer: 0,
        employer: 0,
      },
      {
        username: 'referencer2',
        password: 'password2',
        candidate: 0,
        referencer: 1,
        employer: 0,
      },
      {
        username: 'employer3',
        password: 'password3',
        candidate: 0,
        referencer: 0,
        employer: 1,
      },
    ]),
  },
};
