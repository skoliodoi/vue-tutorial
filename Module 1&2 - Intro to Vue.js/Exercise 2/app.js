new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alert() {
            alert('DANGER!!!')
          },
          showData(event) {
            this.value = event.target.value
          }
        }
    });