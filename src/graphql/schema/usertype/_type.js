const UserType = `
  type UserType {
    id: ID!
   	isCandidate: Boolean!,
    isReference: Boolean!,
    isEmployer: Boolean!,
  }
`;

export const types = () => [UserType];

export const typeResolvers = {

};
