import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import {TestScreen} from './TestScreen';

const client = new ApolloClient({
  uri: 'https://hasura.sukimashopping.com/v1/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <TestScreen />
    </ApolloProvider>
  );
}

export default App;
