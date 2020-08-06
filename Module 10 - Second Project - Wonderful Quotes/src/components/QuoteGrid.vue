<template>
  <div class="row">
    <app-quote 
    v-for="(each, index) in myQuotes"
    @click.native="deleteQuote(index)">
      {{ each }}
    </app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props: ['myQuotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>