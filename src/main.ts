import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/styles/tailwind.css'
import vuetify from './plugins/vuetify';

Axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.prototype.$defaultURL = 'http://localhost:8000/api'

Vue.directive('keynumber', {
  bind(el, binding, vnode) {

    let max = 0
    let modifiers = Object.keys(binding.modifiers)
    modifiers.forEach(modifier => {
      if(modifier.substring(0,3) == "max"){
        max = parseInt(modifier.substring(3))
      }
    })

    el.addEventListener('keyup', (keyboard) => {
      if(Number.isInteger(parseInt(keyboard.key))){
        if(vnode.context.id.length >= max){
          vnode.context.id = ''
        }
        binding.value(keyboard.key)
      }
    })
  }
})

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
