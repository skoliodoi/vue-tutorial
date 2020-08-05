<template>
    <div class="container">
      <quote-grid :myQuotes="quotes">
      </quote-grid>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  export default {
    data() {
      return {
        maxQuotes: 10,
        quotes: [
          'Just a Quote',
          'One More Quote'
        ]
      }
    },
    components: {
      quoteGrid: QuoteGrid
    }
  }
</script>

<style>
</style>
