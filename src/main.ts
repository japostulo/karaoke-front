import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/styles/tailwind.css'

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
        console.log(max)
        // if( > max){
        //   console.log("resetou a porra toda")
        // }
        binding.value(keyboard.key)
      }
    })
  }
})

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
