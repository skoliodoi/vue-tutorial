<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <my-server
          v-for="each in servers"
          :server="each"></my-server>
        </ul>
    </div>
</template>

<script>
  import Server from './Server.vue'
  export default {
    data() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'FUBAR'}
        ]
      }
    },
    components: {
      'my-server': Server
    }
  }
</script>

<style>

</style>
