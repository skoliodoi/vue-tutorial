<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <!--- This one is a custon event from child to parent communication -->
        <button @click="resetName">Reset Name</button>
        <!--- This one is using a callback function -->
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: ['name', 'resetFn'],
    methods: {
      /*switchName() {
        return this.name.split("").reverse().join("");
      },*/
      resetName() {
        this.name = "Szymon"
        this.$emit('nameWasReset', this.name)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
