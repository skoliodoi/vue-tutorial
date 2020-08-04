<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server #{{ server.id }} status is: {{ server.status }}</p>
        <button @click="normalize">Normalize</button>
    </div>

</template>

<script>
  import { eventBus } from '../../main.js'
  export default {
    data() {
      return{
        server: null
      }
    },
    methods: {
      normalize() {
        this.server.status = "Normal";
      }
    },
    created() {
      eventBus.$on('serverSelection', (server) => {
        this.server = server;
      })
    },
  }
</script>

<style>

</style>
