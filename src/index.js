import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const SERVER_BASE_URL = 'https://challenge-riq1.herokuapp.com/graphql';
const httpLink = new HttpLink({
  uri: SERVER_BASE_URL,
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
