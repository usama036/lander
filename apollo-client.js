import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://127.0.0.1:1337/graphql', // Replace with your GraphQL endpoint
	cache: new InMemoryCache(),
});

export default client;
