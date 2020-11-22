<template>
  <div class="relative">
    <video
      :src="link"
      model="video"
      id="video"
      class="h-screen w-screen"
      style="object-fit: fill"
      autoplay="true"
      muted="true"
    ></video>
  </div>
</template>

<script>
export default {
    props:[
        'id',
        'queue',
        'mode',
    ],  
    data(){
        return {
            link: "",
            video: "",
        }
    },
    methods:{
        modeValidate() {
            let id 
            this.mode == 'music' ? id = this.id : id = '00000'
            this.play(id);
        },
        play(id) {
            this.link = `${this.$defaultURL}/videos/${this.mode}/${id}`

            // document.getElementById('video').addEventListener('ended', () => {
            //     alert('Terminou')
            // }, false)

        }
    },
    watch:{
        id(){
            this.modeValidate()
        }
    },
    created(){
        this.modeValidate()
    },    
}
</script>

<style>
</style>