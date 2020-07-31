<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Components</h1>
                <p>This task is {{ status }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data: function() {
        return {
          status: 'completed!'
        }
      }
    }
</script>

<style>

</style>
