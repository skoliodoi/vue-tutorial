<template>
  <div class="row">
    <app-quote v-for="each in myQuotes">
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
  }
}
</script>

<style scoped>

</style>