<script>
import {store} from './store';
import axios from 'axios';
import AppSearch from './components/AppSearch.vue';
import FilmList from './components/FilmList.vue';
import 'animate.css';
  export default{
    components:{
      AppSearch,
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
      // getSeries(){
      //   let mySeriesUrl = store.apiSeriesURL;
      //   mySeriesUrl += `&${store.apiQuery}=${store.searchFilm}`
      //   axios
      //     .get(mySeriesUrl)
      //     .then(result => {
      //       store.cardList = result.data.results;
      //     })
      //     .catch(error => {
      //       console.log('errori', error);
      //     })
      // }
    },
  }
</script>

<template>
  <AppSearch @search="getFilms()"/>
  <!-- Ho rimosso getSeries in quanto ho introdotto un nuovo link per cercare entrambe le cose (film & serie) -->
  <FilmList/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
  .title {
    font-weight: bold;
    color: #ffac07;
  }
  .my_logo{
    width: 50px;
  }
</style>
