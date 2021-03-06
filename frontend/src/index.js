import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import * as serviceWorker from './serviceWorker';
import './index.css';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
	request: async operation => {
		const token = await localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? `${token}` : null,
			},
		});
	 },
});

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
