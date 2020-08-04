// GLOBAL component:
//Vue.component('my-cmd',{})

//LOCAL component:
var component = {
  data: function(){
    return {
      status: 'Normal'
    }
  },
  template: '<h1>Server status is: {{ status }} <button @click="changeStatus">Change</button></h1>',
  methods: {
    changeStatus: function() {
      this.status = 'Critical';
    }
  }
}

new Vue ({
  el: "#app",
  components: {
    'my-cmd': component
  }

})

new Vue ({
  el: "#app2",

})