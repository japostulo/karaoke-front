import Vue from 'vue';

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