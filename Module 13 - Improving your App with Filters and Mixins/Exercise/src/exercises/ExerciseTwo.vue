<template>
  <div>
    <!-- Exercise 2 -->
    <!-- Build a global Filter which counts the length of a word and it appends it -->
    <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
    <p>Exercise 2</p>
    <p>{{ text | count-length }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Imponderabilia'
    }
  }
}
</script>