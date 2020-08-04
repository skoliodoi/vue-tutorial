<template>
  <server-list
   :servers="servers"></server-list>
</template>

<script>
  import ServerList from './ServerList.vue'
  export default {
    components: {
      'server-list': ServerList
    },
    data: function() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Normal'},
          {id: 3, status: 'Normal'},
          {id: 4, status: 'Normal'},
          {id: 5, status: 'Normal'},
        ]
      }
    }
  }
</script>

<style>

</style>
