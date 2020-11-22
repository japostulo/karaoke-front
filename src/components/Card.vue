<template>
  <v-row border="top" class="bg-red-200" background-color="blue">
    <v-col
      align="center"
      class="bg-blue-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl stroke-3 smh:bg-blue-500 p-0"
      >{{ id.padStart(5, 0) }}</v-col
    >
    <v-col
      align="start"
      cols="6"
      class="bg-blue-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl stroke-2 p-0"
      >{{ name }}</v-col
    >
    <v-col
      cols="2"
      align="center"
      items="center"
      class="bg-blue-600 text-xl sm:text-xl md:text-3xl xl:text-5xl text-black stroke-1 p-0"
    >
      <div>Coin</div>
      <div>{{ coin }}</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props:{
    coin:Number,
    id:String,
    name:String
  },
    data(){
        return{
            text:0,
        }
    }
}
</script>

<style>
</style>