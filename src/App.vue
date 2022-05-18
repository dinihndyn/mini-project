<template>
  <div id="app">
    <headerComponent />
    <div class="container">
      <div class="row">
        <div class="col-8">
          <productList />

        </div>
        <div class="col-4">
          <cartComponent />

        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import CartComponent from './components/cartComponent.vue'
import headerComponent from "./components/headerComponent.vue"
import productList from "./components/productList.vue";


export default {
  name: 'App',
  components: {
    headerComponent,
    productList,
    CartComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
