<template>
  <div>
    <!-- <video-c :id="music.padStart(5, 0)" :mode="'music'" /> -->

    <div
      v-keynumber.max5="setId"
      v-focus
      @keyup.p="insertCoin"
      @keyup.q="remove"
      @keyup.enter="play"
      class="top-0 absolute w-full outline-none"
      tabindex="0"
    >
      <div class="h-screen grid grid-rows-4 grid-flow-col">
        <div
          class="row-span-2 flex justify-center items-end text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl stroke-3 smh:bg-blue-500"
        >
          {{ id.padStart(5, 0) }}
        </div>
        <div
          class="flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl stroke-2"
        >
          {{ name }}
        </div>
        <div
          class="flex justify-end items-end text-xl sm:text-xl md:text-3xl xl:text-5xl text-black stroke-1"
        >
          Coin: {{ coin }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let numero="";
import videoC from '../components/Video'

export default {
    components:{
        videoC,
    },
    data() {
        return {
            id:'',
            name:'Digite uma música',
            coin:0,
            err:'',
            music: '',
        }
    },
    methods:{
        setId(key){
            this.id += key
        },
        insertCoin(){
            this.coin++;
        },
        max(value, max){
            if(value.length > max){
                value = ""
            } 
        },
        play(){
            // antes validar se tem no banco de dados e setar em uma variavel diferente passando o mode
            this.music = this.id
        },

        remove(){
            this.id = this.id.substring(0,this.id.length-1)
        }
    },
    watch:{

    }
}
</script>

<style>
.stroke-1 {
  color: orange;
  text-shadow: 0.18vw 0.18vw black;
}

.stroke-2 {
  color: orange;
  text-shadow: 0.2vw 0.2vw black;
}

.stroke-3 {
  color: white;
  text-shadow: 0.5vw 0.5vw black;
}
</style>