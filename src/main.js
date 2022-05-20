import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo from "vue-apollo";

Vue.use(VueApollo);

Vue.config.productionTip = false

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem('apollo-token');
  // const token = "Vz9k1OJwaYhW3TD8ItVFwWqx0JyewuY4tC91L0vfvn3kfpo0bH64RZdn9Au53jRi";
  console.log("🚀 ~ file: main.js ~ line 19 ~ getHeaders ~ token", token)
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
   return headers;
};

 // Create an http link:
 const link = new HttpLink({
    uri: 'https://myflorist.herokuapp.com/v1/graphql',
    fetch,
    headers: getHeaders()
 });

 export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
      addTypename: true
    })
 });

  const apolloProvider = new VueApollo({
    defaultClient: client,
  })

new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
