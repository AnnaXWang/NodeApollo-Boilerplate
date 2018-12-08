const path = require('path');
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/schema');

const pathDotEnv = path.join(__dirname, '.env');
require('dotenv').config({path: pathDotEnv});
/*
 Verify the token stored in the request headers
 before the request is passed to the resolvers
*/
const getMe = async(req) => {
	const token = req.headers['authorization'];
	if (token !== 'null') {
		return await jwt.verify(token, process.env.SECRET, function(err, decoded) {
			if (err){
				return null;
			}
			return decoded;
		});
	}
};

// create the server according to our schema
const apollo = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
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

// add routing so that Heroku hosts correctly and serves the frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, '../frontend/build/', 'index.html'));
	});
}

// add middleware so that our Apollo Server runs express
apollo.applyMiddleware({ app });

// listen on the correct port
const port = process.env.PORT || 5000;
app.listen({ port: port }, () => {
	const output = '🚀 Apollo Server on http://localhost:';
	console.log(output + port + '/graphql');
});
