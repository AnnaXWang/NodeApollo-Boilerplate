const Query = `
 extend type Query {
   organizations: [Organization]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    organizations: () => ([
      {
        name: 'org1',
      },
      {
        name: 'org2',
      },
      {
        name: 'org3',
      },
    ]),
  },
};
