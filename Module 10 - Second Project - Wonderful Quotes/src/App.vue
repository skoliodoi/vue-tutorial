<template>
    <div class="container">
       <new-quote @quoteCreated="addQuote"></new-quote>
      <quote-grid :myQuotes="quotes">
      </quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
        </div>
      </div>
    </div>
</template>

<script>
  import NewQuote from './components/NewQuote.vue'
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
      quoteGrid: QuoteGrid,
      newQuote: NewQuote
    },
    methods: {
      addQuote(data) {
        this.quotes.push(data)
      }
    }
  }
</script>

<style>
</style>
