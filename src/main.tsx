import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const API_KEY =
  '1ar8ovS31mVFVx9TfppXKmc2JVqmZaA7ohsDUm8JFwD81CcGrfN_zcPpzvIfbThCe7r72BRzFEqIXIFBzxrJpQeaMw3xihNIjPeUXEBEwTtiTLexbIehbJdBAqgGZHYx';

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
