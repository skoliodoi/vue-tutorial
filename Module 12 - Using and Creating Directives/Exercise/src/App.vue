<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-app-on:click="{alertFunction: alertMe}"
                v-app-on:background="'blue'">Testing</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'app-on': {
          bind(el, binding) {
            el.style.background = binding.value
            let type = binding.arg;
            let myFunction = binding.value.alertFunction
            el.addEventListener(type, myFunction)
          }
        }
      },
      methods: {
        alertMe() {
          alert("IT LIVES")
        }
      }
    }
</script>

<style>
</style>
