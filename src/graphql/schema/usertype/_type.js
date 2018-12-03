const UserType = `
  type UserType {
    id: ID!
   	isCandidate: Boolean!,
    isReference: Boolean!,
    isEmployer: Boolean!,
    createdAt: Date!
   	updatedAt: Date!
  }
`;

export const types = () => [UserType];

export const typeResolvers = {

};
