<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ obiwanKenobi | to-lowercase }}</p>
        <p>{{ generalGrievous | to-uppercase }}</p>
        <hr>
        <button @click="characters.push('Kylo Ren')">Add New</button>
        <input v-model="filteredText" />
        <ul>
          <li v-for="each in filteredList">{{ each }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import { charMixin } from './charactersMixin.js'
import List from "./List.vue";
export default {
  data() {
    return {
      obiwanKenobi: "Hello there!",
      generalGrievous: "General Kenobi",
    };
  },
  components: {
    appList: List,
  },
  filters: {
    "to-lowercase"(value) {
      return value.toLowerCase();
    }
  },
  mixins: [charMixin]
};
</script>

<style>
</style>
