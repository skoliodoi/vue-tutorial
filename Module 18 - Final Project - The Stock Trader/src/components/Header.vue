<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  
  <div class="navbar-header">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  </div>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/portfolio" 
        class="nav-link" 
        active-class="active">Portfolio </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/stocks" 
        class="nav-link" 
        active-class="active">Stocks </router-link>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item"><a href="" 
      class="nav-link"
      @click.prevent="endDay">End Day</a></li>
      <li class="nav-item dropdown">
        <a 
        class="nav-link dropdown-toggle" 
        href="#" id="navbarDropdown" 
        role="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData">Save</a>
          <a class="dropdown-item" href="#"
          @click="loadData">Load</a>
        </div>
      </li>
    </ul>
    <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
  </div>
</nav>
</template>

<script>
import {mapActions} from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      
    }
  }
};
</script>

<style scoped>
</style>