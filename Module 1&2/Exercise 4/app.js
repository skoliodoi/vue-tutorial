new Vue({
  el: '#exercise',
  data: {
    effect: true,
    style: '',
    styleTwo: '',
    isWhite: false,
    isBlue: false,
    isGreen: false,
  },
  computed: {
    styleChange() {
      return {
        highlight: this.effect,
        shrink: !this.effect
      }
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.effect = !this.effect
      }, 2000);
    },
    makeWhite() {
      if (this.isWhite == true) {
        this.isWhite = !this.isWhite
      } else {
        this.isBlue = false;
        this.isWhite = true;
        this.isGreen = false;
      }
      
    },
    makeBlue() {
      if (this.isBlue == true) {
        this.isBlue = !this.isBlue
      } else {
        this.isBlue = true;
        this.isWhite = false;
        this.isGreen = false;
      }
    },
    makeGreen() {
      if (this.isGreen == true) {
        this.isGreen = !this.isGreen
      } else {
        this.isBlue = false;
        this.isWhite = false;
        this.isGreen = true;
      }
    }
  }
});
