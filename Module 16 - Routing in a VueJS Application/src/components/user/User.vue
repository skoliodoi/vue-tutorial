<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-secondary" @click="goHome">
      Go Home
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>