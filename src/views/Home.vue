<template>
    <div>
        <video-c :id="id" :mode="'music'"/>
        
        <div class="top-0 absolute">
            <div class="w-screen flex justify-center items-center " style="height:95vh">
                <div class="text-center text-white">
                    <div class="text-7xl">
                        {{id}}
                    </div>
                    <div class="text-5xl">
                        {{name}}
                    </div>
                </div>
            </div>

            <div class="text-right h-full text-3xl text-white" style="height:5vh">
                Coin: {{coin}}
            </div>
        </div>
    </div>
</template>

<script>
import videoC from '../components/Video'

export default {
    components:{
        videoC,
    },
    data() {
        return {
            id:'00000',
            name:'Digite uma música',
            coin:0,
            err:'',
        }
    }
}
</script>

<style>

</style>