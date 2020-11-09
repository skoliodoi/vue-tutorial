<template>
  <base-container title="Vuex">
  <h3>{{ $store.state.counter }}</h3>
  <button @click="addOne">Add 1</button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  methods: {
    addOne() {
      this.$store.state.counter += 11;
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