<template>
  <div id="app">
    <headerComponent />
      
    
    
    <div class="container">
      <homeComponent />
      
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
import cartComponent from './components/cartComponent.vue'
import headerComponent from "./components/headerComponent.vue"
import productList from "./components/productList.vue"
import homeComponent from "./components/homeComponent.vue"


export default {
  name: 'App',
  components: {
    headerComponent,
    productList,
    cartComponent,
    homeComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
</style>
