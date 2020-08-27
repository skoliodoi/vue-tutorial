<template>
  <div>
    <!-- Exercise 3 -->
    <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
    <p>Exercise 3</p>
    <p>{{ reversed }}</p>
    <p>{{ counted }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      reverseText: 'This text is gonna be reversed!',
      countWords: 'Konstantynopolitańczykiewiczówianeczka'
    }
  },
  computed: {
    reversed() {
      return this.reverseText.split("").reverse().join("")
    },
    counted() {
      const wordsLen = this.countWords.length;
      return this.countWords + " (" + wordsLen + ")"
    }
  }
};
</script>