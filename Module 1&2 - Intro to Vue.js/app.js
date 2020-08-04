new Vue({
  el: '#app',
  data: {
    title: "Hello World!",
    link: "http://google.com",
    counter: 0,
    secondCounter: 0,
    x: 0,
    y:0,
    name: 'Szymon',
    attachRed: false,
    color: 'green',
    colorTwo: 'gray',
    width: 100
  },
  computed: {
    output() {
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle() {
      return {
        backgroundColor: this.colorTwo,
        width: this.width + 'px'
      }
    }
  },
  watch: {
    counter: function (value) {
      setTimeout(() => {  
        this.counter = 0;
      },2000);
    }
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe() {
      alert('Alarm!')
    },
    result() {
      console.log('Method');
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  }
});