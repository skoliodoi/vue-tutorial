<template>
  <base-container title="Vuex">
  <h3>{{ $store.state.counter }}</h3>
  <button @click="addThree(3)">Add 3</button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  methods: {
    addThree(val) {
      this.$store.commit('increase', val)
    }
  },
  components: {
    BaseContainer,
    ChangeCounter
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