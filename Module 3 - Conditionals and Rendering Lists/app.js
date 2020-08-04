new Vue({
	el: '#app',
	data: {
    show: true,
    ingredients: ['meat','fruit', 'cookies'],
    persons: [
      {Name: 'Max', Age: 27, 'Eye color': 'red'},
      {Name: 'Anna', Age: 'unknown', 'Eye color': 'blue'},
    ],
    ingredient: ''
  },
  methods: {
    addIng() {
      this.ingredients.push(this.ingredient);
      this.ingredient = '';
    }
  }
})