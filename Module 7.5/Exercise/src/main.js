import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('my-container', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
