<template>
<div>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">Set Goal</button>
  <error-alert v-if="inputInvalid">
    <h2>Input invalid!</h2>
    <p>Write down something!</p>
  </error-alert>
</div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components: {
    ErrorAlert
  },
  data(){
    return {
      inputInvalid: false,
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputInvalid = true
      }
    }
  }
}
</script>