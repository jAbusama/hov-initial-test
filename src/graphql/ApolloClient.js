import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
	uri: 'https://countries.trevorblades.com/',
});

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink,
});
