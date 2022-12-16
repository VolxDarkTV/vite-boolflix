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
      },
      getSeries(){
        let mySeriesUrl = store.apiSeriesURL;
        mySeriesUrl += `&${store.apiQuery}=${store.searchFilm}`
        axios
          .get(mySeriesUrl)
          .then(result => {
            store.cardList = result.data.results;
          })
          .catch(error => {
            console.log('errori', error);
          })
      }
    },
    mounted(){
      this.getFilms();
      this.getSeries();
    }
  }
</script>

<template>
  <h1>{{store.titolo}}</h1>
  <FilmList @search="getFilms(), getSeries()"/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
