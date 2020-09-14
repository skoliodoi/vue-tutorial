<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-secondary" @click="goHome">
      Go Home
    </button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>