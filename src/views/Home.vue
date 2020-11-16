<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <video :src="`http://localhost:8000/api/video/${id}`" controls="true"></video>
    <input style="padding:5px;border:1px solid blue" type="text" v-model="id">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      id:'03588'
    }
  },
  components: {
    HelloWorld
  },
  created(){

  }
}
</script>
