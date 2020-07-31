Vue.component('my-cmd',  {
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
})

new Vue ({
  el: "#app",

})