<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <favourite-value></favourite-value>
  <button @click="addThree(3)">Add 3</button>
  <change-counter></change-counter>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue'
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  methods: {
    addThree(val) {
      this.$store.commit('increase', val)
    }
  },
  components: {
    TheCounter,
    BaseContainer,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>