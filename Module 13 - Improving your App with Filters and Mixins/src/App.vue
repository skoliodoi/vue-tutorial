<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ obiwanKenobi | to-lowercase }}</p>
                <p>{{ generalGrievous | to-uppercase }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          obiwanKenobi: "Hello there!",
          generalGrievous: "General Kenobi"
        }
      },
      filters: {
        'to-lowercase'(value) {
          return value.toLowerCase()
        }
      }
    }
</script>

<style>

</style>
