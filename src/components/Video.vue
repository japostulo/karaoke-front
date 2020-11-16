<template>
    <div>
        <video :src="link" autoplay="true" controls="true">

        </video>
    </div>
</template>

<script>
export default {
    data(){
        return {
            link:`http://localhost:8000/api/video/01`,
        }
    },
}
</script>

<style>

</style>