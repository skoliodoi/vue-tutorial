<template>
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="each in servers"
                    @click="clickMe">
                Server #{{ each.id }}
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['servers'],
  methods: {
    clickMe() {
      console.log(this.servers)
    }
  }
}
</script>