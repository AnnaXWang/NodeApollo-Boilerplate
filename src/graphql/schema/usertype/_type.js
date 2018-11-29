const UserType = `
  type UserType {
    id: ID!
   	candidate: Boolean!,
    reference: Boolean!,
    employer: Boolean!,
  }
`;

export const types = () => [UserType];

export const typeResolvers = {

};
