import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/styles/tailwind.css'

Axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.prototype.$defaultURL = 'http://localhost:8000/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
