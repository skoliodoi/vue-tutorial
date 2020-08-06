<template>
    <div class="container">
      <app-header :quoteCount="quotes.length"
      :maxCount="maxQuotes"></app-header>
      <new-quote @quoteCreated="addQuote"></new-quote>
      <quote-grid 
      :myQuotes="quotes"
      @quoteDeleted="quoteDelete">
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
  import Header from './components/Header.vue'
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
      appHeader: Header,
      quoteGrid: QuoteGrid,
      newQuote: NewQuote
    },
    methods: {
      addQuote(data) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please, delete some quotes first!')
        }
        this.quotes.push(data)
      },
      quoteDelete(index) {
        this.quotes.splice(index, 1)
      }
    }
  }
</script>

<style>
</style>
