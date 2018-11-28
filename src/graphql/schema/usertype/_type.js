const UserType = `
  type UserType {
    id: ID!
   	candidate: Boolean!,
    referencer: Boolean!,
    employer: Boolean!,
  }
`;

export const types = () => [UserType];

export const typeResolvers = {

};
