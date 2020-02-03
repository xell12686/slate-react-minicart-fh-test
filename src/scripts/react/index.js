import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

// http link that will connect our app to our graphql
const httpLink = createHttpLink({
	uri: 'https://fhteststore.myshopify.com/api/graphql'
});

// middleware to authenticate our request
const middlewareLink = setContext(() => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': 'b4bbb2745af2318a419e20f6f10d981a'
	}
}));

// create apollo client
const client = new ApolloClient({
	link: middlewareLink.concat(httpLink), 
	cache: new InMemoryCache()
})

// render an app on the page using the apollo provider

ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,
	document.getElementById('root')
);