<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="each in servers">
                Server #{{ each.id }}
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'FUBAR'}
        ]
      }
    }
  }
</script>

<style>

</style>
