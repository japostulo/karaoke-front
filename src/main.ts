import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/styles/tailwind.css'
import vuetify from './plugins/vuetify';
import '@/directives/key.ts';

Axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.prototype.$defaultURL = 'http://localhost:8000/api'

Vue.directive('start', (el) => {
  console.log('chamou a start')
  console.log('Está tocando')
})

Vue.directive('finish', (el) => {
  console.log('chamou a finish')
  el.addEventListener('ended', () => {
    console.log('Terminou')
  })
})

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
