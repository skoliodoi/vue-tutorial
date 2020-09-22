<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    data() {
      return {
        stocks: [
          { id:1, name: 'BMW', price: 110 },
          { id:2, name: 'Google', price: 250 },
          { id:3, name: 'Sony', price: 69 },
          { id:4, name: 'Microsoft', price: 420 },
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>