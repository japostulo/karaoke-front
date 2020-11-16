import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
