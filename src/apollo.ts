import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

export default () => {
  const cache = new InMemoryCache();

  return new ApolloClient({
    cache,
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
  });
};
