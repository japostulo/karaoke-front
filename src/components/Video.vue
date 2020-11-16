<template>
    <div class="relative">
        <video :src="link" class="h-screen w-screen" style="object-fit:fill" autoplay="true" controls="true">

        </video>
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
        }
    },
    methods:{
        modeValidate() {
            let id 
            this.mode == 'music' ? id = this.id : id = '00000'
            this.link = `${this.$defaultURL}/video/${this.mode}/${id}`
            console.log(this.link)
        }
    },
    created(){
        this.modeValidate()
    },    
}
</script>

<style>

</style>