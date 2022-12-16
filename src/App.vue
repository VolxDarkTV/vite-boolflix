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
    methods:{
      getFilms(){
        let myUrl = store.apiURL;
        myUrl += `&query=black+adam`
        axios
          .get(myUrl)
          .then(res => {
              store.cardList = res.data.results;
          })
          .catch(err => {
            console.log('errori', err);
          })
      }
    },
    mounted(){
      this.getFilms();
    }
  }
</script>

<template>
  <FilmList/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
