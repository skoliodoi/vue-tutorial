<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>User age: {{ userAge }}</p>
        <!--- This one is a custon event from child to parent communication -->
        <button @click="resetName">Reset Name with a Custom Event</button>
        <!--- This one is using a callback function -->
        <button @click="resetFn()">Reset Name with a Callback</button>
    </div>
</template>

<script>
  import { eventBus } from '../main'
  export default {
    props: {
      name: {
        type: String
      },
      resetFn: Function,
      userAge: Number,
    },
    methods: {
      /*switchName() {
        return this.name.split("").reverse().join("");
      },*/
      resetName() {
        this.name = "Szymon"
        this.$emit('nameWasReset', this.name)
      }
    },
    created() {
      eventBus.$on('ageWasChanged',(data) => {
        this.userAge = data;
      })
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
