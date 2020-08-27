import Vue from 'vue'
import App from './App.vue'

Vue.filter('count-length', function(value) {
  const textLen = value.length
  return  value + " (" + textLen + ")"
})

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
