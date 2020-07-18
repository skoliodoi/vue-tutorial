new Vue({
  el: '#exercise',
  data: {
    effect: true,
    style: '',
    styleTwo: '',
    isWhite: false,
    isBlue: false,
    isGreen: false,
    appears: '',
    color: '',
    height: '',
    progressHeight: 20,
    progressWidth: 0,
    counter: 0
  },
  computed: {
    styleChange() {
      return {
        highlight: this.effect,
        shrink: !this.effect
      }
    },
    styleInput() {
      return {
        backgroundColor: this.color,
        height: this.height + 'px',
        width: this.height*2 + 'px'
      }
    },
    styleProgress() {
      return {
        height: this.progressHeight + 'px',
        width: this.progressWidth + 'px',
        backgroundColor: 'green',
        color: '#fff',
        textAlign: 'center'
      }
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.effect = !this.effect
      }, 2000);
    },
    startProgress() {
      setInterval(() => {
        if (this.progressWidth !== 200) {
          this.progressWidth+=2;
          this.counter++;
        }
      }, 100);
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
