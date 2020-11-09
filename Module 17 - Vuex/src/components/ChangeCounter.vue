<template>
  <button @click="increaseAsync">Add 1</button>
</template>

<script>
import{ mapActions } from 'vuex';
export default {
  methods: {
  ...mapActions(['increaseAsync'])
  }
}
</script>

<style>

</style>