new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        methods: {
          result() {
            return this.value < 37 ? "Not there yet" : this.value > 37 ? "Too far!" : "Done!";
          }
        },
        watch: {
          value: function() {
            setTimeout(() => {
              this.value = 0;
            },5000);
          }
        }
    });