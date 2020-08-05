<template>
  <div class="row">
    <div v-for="each in myQuotes">
      {{ each }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['myQuotes']
}
</script>

<style scoped>

</style>