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
        myUrl += `&${store.apiQuery}=${store.searchFilm}`
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
  <FilmList @search="getFilms()"/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
