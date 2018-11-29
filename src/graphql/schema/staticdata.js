const users = [
  {
    id: 1,
    username: 'candidate1',
    password: 'password1',
    userTypeId: 1,
  },
  {
    id: 2,
    username: 'referencer2',
    password: 'password2',
    userTypeId: 2,
  },
  {
    id: 3,
    username: 'employer3',
    password: 'password3',
    userTypeId: 3,
  },
];

const usertypes = [
  {
    id: 1,
    candidate: true,
    reference: false,
    employer: false,
  },
  {
    id: 2,
    candidate: false,
    reference: true,
    employer: false,
  },
  {
    id: 3,
    candidate: false,
    reference: false,
    employer: true,
  },
];

export { users, usertypes };

