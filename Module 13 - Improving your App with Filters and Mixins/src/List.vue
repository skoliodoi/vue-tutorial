<template>
<div>
  <h1>Filters & Mixins</h1>
  <hr>
  <input v-model="filteredText">
  <ul>
    <li v-for="each in filteredList">{{ each }}</li>
  </ul>  
</div>
</template>

<script>
    import { charMixin } from './charactersMixin.js'
    export default {
      mixins: [charMixin]
    }
</script>