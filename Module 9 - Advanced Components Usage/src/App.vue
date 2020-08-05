<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent='appQuote'">Quote</button>
              <button @click="selectedComponent='appAuthor'">Author</button>
              <button @click="selectedComponent='appNew'">New</button>
              <p>{{ selectedComponent }}</p>
              <component :is="selectedComponent"></component>
               <!--<app-quote>
                 <h2 slot="title">{{ quoteTitle }}</h2>
                 <p>A wonderful quote!</p>
               </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    export default {
      data() {
        return {
          quoteTitle: 'The Quote',
          selectedComponent: ''
        }
      },
      components: {
        appQuote: Quote,
        appNew: New,
        appAuthor: Author
      }
    }
</script>

<style>

</style>
