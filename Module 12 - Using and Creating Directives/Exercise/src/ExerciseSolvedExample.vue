<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary"
                v-effect:click="showAlert">Click!</button>
                <hr>
                <div class="stylish"
                v-effect:mouseenter="mouseEntered"
                v-effect:mouseleave="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    effect: {
      bind(el, binding) {
        const actionType = binding.arg;
        const preferredFunction = binding.value;
        el.addEventListener(actionType, preferredFunction)
      }
    }
  },
  methods: {
    showAlert() {
      alert("THE EAGLES ARE COMING!")
    },
    mouseEntered() {
      console.log("The Mouse has entered the chat")
    },
    mouseLeft() {
      console.log("The Mouse has left the chat")
    }
  }
  
}
</script>

<style scoped>
  .stylish {
    width: 100px;
    height: 100px;
    background-color: darksalmon;
  }

</style>