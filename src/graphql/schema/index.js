import fs from 'fs';
import path from 'path';
import { merge } from 'lodash';

//Used to query the data
const Query = `
  type Query {
    status: String
  }
`;

//used to alter data
const Mutation = `
  type Mutation {
    _empty: String
  }
`;

//used to define how queries/mutations will be handled by our app
let resolvers = {
  Query: {
    status: () => 'ok'
  }
};

const typeDefs = [Query, Mutation];

// Read the current directory and load types and resolvers automatically
fs.readdirSync(__dirname)
  .filter(dir => (dir.indexOf('.') < 0))
  .forEach((dir) => {
    const tmp = require(path.join(__dirname, dir)).default; // eslint-disable-line
    resolvers = merge(resolvers, tmp.resolvers);
    typeDefs.push(tmp.types);
  });

export {
  typeDefs,
  resolvers
};