import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema';

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.get('/api/status', (req, res) => {
  res.send({ status: 'ok' });
});

apollo.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log(' 🚀 Apollo Server on http://localhost:8000/graphql');
});
