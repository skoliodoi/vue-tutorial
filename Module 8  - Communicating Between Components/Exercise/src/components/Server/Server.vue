<template>
  <li
          class="list-group-item"
          style="cursor: pointer"
          @click="clickMe">
      Server #{{ server.id }}
  </li>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
  props: ['server'],
  methods: {
    clickMe() {
      eventBus.$emit("serverSelection", this.server)
    }
  }
}
</script>