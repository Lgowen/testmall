<template>
  <div id="app">
       {{$store.state.count}}
       <button @click="add">+</button>
       <button @click="decre">-</button>
  </div>
</template>

<script>
import hellovuex from './components/hellovuex';
    export default {
      name : 'App',
      data(){
        return {
          message: '我是app组件'
        }
      },
      components:{
        hellovuex
      },
      methods: {
        add(){
            this.$store.commit('addCount');
        },
        decre(){
            this.$store.commit('decreCount');
        }
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>