import Vue from 'vue';
import Vuex from 'vuex';
// import products from '../mock/products.json';
import { client } from '../main'

Vue.use(Vuex)

import gql from 'graphql-tag';
export const GET_MY_FLORIST = gql`
    query getFlorist {
    florist (order_by: {id: asc}){
        title
        price
        id
        imgUrl
    }
}`;

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    products: state => state.products,
    cart: state=> state.cart,
  },
  actions: {
    getProducts({commit}) {
      commit("getProductData");
    },
    addToCart({commit},item){
      commit("addItemToCart", item);
    },
    addQty({commit }, id){
      commit("addQty",id);

    },
    reduceQty({commit }, id){
      commit("reduceQty", id);
      
    },
    removeItem({commit }, id){
      commit("removeQty", id);

    },
    emptyCart ({commit}){
      commit ("emptyCart")
    }
  },

  mutations: {
    getProductData(state) {
      // state.products = products;
      // Get data product from florist graphql
      client.query({query:GET_MY_FLORIST}).then(result => {
        state.products = result.data.florist;
      })
    },
    addItemToCart(state, item){
        const addedItem = state.cart.find(product => product.id === item.id);
        if (addedItem) {
          addedItem.qty++

        }
        else{
          state.cart.push({...item, qty: 1});

        }
    },
    addQty(state,id) {
      const currentItem = state.cart.find(product => product.id === id);
      currentItem.qty++

    },
    reduceQty(state, id) {
      const currentItem = state.cart.find(product => product.id === id);
      if (currentItem.qty > 1) {
        currentItem.qty--;

      }
      else {
        state.cart = state.cart.filter(product => product.id !== id);

      }
      

    },
    removeItem(state, id) {
      state.cart = state.cart.filter(product => product.id !== id);

    },
    emptyCart(state){
      state.cart= [];
    }
  }

})



