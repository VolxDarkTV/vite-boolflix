<script>
import {store} from './store';
import axios from 'axios';

  export default{
    data(){
      return{
        store,
      }
    },
  }
</script>

<template>
  <h1>Hello World</h1>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
