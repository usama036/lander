import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_URL_GRAPH, // Replace with your GraphQL endpoint
	cache: new InMemoryCache(),
});

export default client;
