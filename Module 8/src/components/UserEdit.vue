<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
         <!--- This one is a custon event from child to parent communication -->
        <button @click="editAge">Edit Age with a Custom Event</button>
        <!--- This one is using a callback function -->
        <button @click="changeAge()">Edit Age with a Callback</button>
    </div>
</template>

<script>
  export default {
    props: ['userAge', 'changeAge'],
    methods: {
      editAge() {
        this.userAge = 30;
        this.$emit('ageWasChanged', this.userAge)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
