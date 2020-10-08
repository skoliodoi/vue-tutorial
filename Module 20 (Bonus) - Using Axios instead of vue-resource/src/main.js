import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-intro-http.firebaseio.com'
axios.defaults.headers.common['Authorizaton'] = 'dsaaaa'
axios.defaults.headers.get['Accepts'] = 'authorization.json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
