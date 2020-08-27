export const exerciseTwoMixin = {
  data(){
    return {
      countWords: 'Wyindywidualizowaliśmy się z rozentuzjazmowanego tłumu, który oklaskuje przeliteraturalizowane dzieła!'
    }
  },
  computed: {
    counted() {
      const wordsLen = this.countWords.length;
      return this.countWords + " (" + wordsLen + ")"
    }
  }
}