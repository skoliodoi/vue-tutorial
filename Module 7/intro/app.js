Vue.component('my-cmd',  {
  data: function(){
    return {
      status: 'Critical'
    }
  },
  template: '<h1>Server status is: {{ status }}</h1>'
})

new Vue ({
  el: "#app",

})