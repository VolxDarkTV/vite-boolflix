<script>
import {store} from './store';
import axios from 'axios';
import FilmList from './components/FilmList.vue';
  export default{
    components:{
      FilmList,
    },
    data(){
      return{
        store,
      }
    },
  }
</script>

<template>
  <FilmList/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
