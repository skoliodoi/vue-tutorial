<template>
  <div>
    <h3>Some User Details</h3>
    <p>This User ID is {{ $route.params.id }}</p>
    <router-link
    tag="button"
    :to="link"
    class="btn btn-primary">
      Edit User
    </router-link>
  </div>
</template>

<script>
  export default {
   data() {
     return {
       link: {
         name: 'userEdit', 
         params: { 
           id: this.$route.params.id 
          }, 
         query: { 
           local: 'en', 
           q: 1000 
          },
          hash: "#data"
       }
     }
   },
   beforeRouteEnter(to, from, next) {
     if (true) {
       next();
     }
     next(false);
   } 
  }
</script>