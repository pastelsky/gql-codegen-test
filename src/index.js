import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'src/App2/App';
import * as serviceWorker from './serviceWorker';
import gql from 'graphql-tag'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.spacex.land/graphql/'
})

const client = new ApolloClient({
  cache,
  link
})

const query = gql`
  query Full($appId: MarketplaceAppId!) {
      marketplaceApp(appId: $appId) {
          ...tags
      },

      ${App.fragments.app}
  }
`

function Main() {

}


ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
