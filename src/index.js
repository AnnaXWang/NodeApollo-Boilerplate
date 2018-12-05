import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema';

/*
 Verify the token stored in the request headers
 before the request is passed to the resolvers
*/
const getMe = async req => {
  const token = req.headers['authorization'];
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new AuthenticationError(
        'Your session expired. Sign in again.',
      );
    }
  }
};

// create the server according to our schema
const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: async({ req }) => {
      const me = await getMe(req);
      return {
          secret: process.env.SECRET,
          me: me,
      };
	},
});

const app = express();
app.use(cors());

// add an API call to test that our server is running correctly
app.get('/api/status', (req, res) => {
	res.send({ status: 'ok' });
});

// add middleware so that our Apollo Server runs express
apollo.applyMiddleware({ app });

// listen on the correct port
const port = process.env.PORT || 8000;
app.listen({ port: port }, () => {
	const output = '🚀 Apollo Server on http://localhost:';
	console.log(output + port + '/graphql');
});
