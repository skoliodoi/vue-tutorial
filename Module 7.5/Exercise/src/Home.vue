<template>
  <div class="container">
        <my-header></my-header>
        <hr>
        <server-status></server-status>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'my-header': Header,
      'my-footer': Footer,
      'server-status': ServerStatus
    }  
  }
</script>