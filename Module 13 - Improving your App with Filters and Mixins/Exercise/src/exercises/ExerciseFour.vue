<template>
  <div>
    <!-- Exercise 4 -->
    <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
    <p>Exercise 4</p>
    <p>{{ counted }}</p>
  </div>
</template>

<script>
import { exerciseTwoMixin } from '../exerciseTwoMixin.js'
export default {
  mixins: [exerciseTwoMixin]
};
</script>