import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {loadDevMessages, loadErrorMessages} from '@apollo/client/dev';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TestScreen} from './TestScreen';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <TestScreen />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
