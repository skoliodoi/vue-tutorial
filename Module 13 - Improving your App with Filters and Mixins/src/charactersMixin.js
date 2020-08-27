export const charMixin = {
  data() {
    return {
      characters: ['Qui-Gon Jinn', 'Han Solo', 'Luke Skywalker', 'Chewbacca'],
      filteredText: ''
    }
  },
  computed: {
    filteredList() {
      return this.characters.filter((element) => {
        return element.match(this.filteredText)
      })
    }
  }
}