import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema';
// import { sequelize } from './models';

// create the server according to our schema
const apollo = new ApolloServer({ typeDefs, resolvers });

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

