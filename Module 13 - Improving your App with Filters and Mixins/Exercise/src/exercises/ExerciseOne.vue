<template>
  <div>
    <!-- Exercise 1) -->
    <!-- Build a local Filter which reverses the Text it is applied on -->
    <p>Exercise 1</p>
    <p>{{ text | reverseText}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'This is gonna be in reverse yooo'
    }
  },
  filters: {
    reverseText(value) {
      return value.split("").reverse().join("")
    }
  }
}
</script>