<template>
    <div>
        <!-- <video-c :id="id" :mode="'music'"/> -->
        
        <div v-keynumber="setId" v-focus @keyup.p="insertCoin" class="top-0 absolute outline-none" tabindex="0">
            <div class="w-screen flex justify-center items-center bg-blue-200" style="height:90vh;">
                <div class="text-center text-black">
                    <div class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl stroke-3">
                        {{id.padStart(5,0)}}
                    </div>
                    <div class="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl stroke-2">
                        {{name}}
                    </div>
                </div>
            </div>

            <div class="h-full text-xl sm:text-xl md:text-3xl xl:text-5xl text-black flex justify-end items-end bg-red-200 stroke-1" style="height:10vh">
                Coin: {{coin}}
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
        }
    },
    watch:{
        id(currentValue){
            this.id.max(currentValue, 5)
        }
    }
}
</script>

<style>
.stroke-1 {
    color:orange;text-shadow:0.18vw 0.18vw black
}

.stroke-2 {
    color:orange;text-shadow:0.20vw 0.20vw black
}

.stroke-3 {
    color:white;text-shadow: 0.50vw 0.50vw black;
}

</style>