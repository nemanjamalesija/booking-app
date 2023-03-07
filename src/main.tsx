import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const API_KEY =
  '1ar8ovS31mVFVx9TfppXKmc2JVqmZaA7ohsDUm8JFwD81CcGrfN_zcPpzvIfbThCe7r72BRzFEqIXIFBzxrJpQeaMw3xihNIjPeUXEBEwTtiTLexbIehbJdBAqgGZHYx';
const httpLink = createHttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
});

const client = new ApolloClient({
  link: httpLink,
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
