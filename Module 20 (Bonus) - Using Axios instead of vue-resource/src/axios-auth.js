import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-intro-http.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'Something'

export default instance