<template>
  <button @click="login"
  v-if="!loginStatus">Login</button>
  <button @click="logout"
  v-else>Logout</button>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['login', 'logout'])
  },
  computed: {
    loginStatus() {
      return this.$store.getters.loggedIn
    }
  }

}
</script>

<style>

</style>