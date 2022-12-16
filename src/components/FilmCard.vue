<script>
import StarRating from 'vue-star-rating'
import {store} from '../store';
    export default{
        data(){
            return{
                store,
            }
        },
        components:{
            StarRating,
        },
        props:['item',],
    }
</script>

<template>
    <div class="my_card card d-flex flex-column align-items-center">
        <img :src="store.imgURL+item.poster_path" :alt="item.original_title">
        <span>{{item.title}}</span>
        <span>{{item.original_title}}</span>
        <span>{{item.original_language}}</span>
        <!-- Flags -->
        <div class="my_container">
            <!-- English -->
            <img src="../../public/img/Flag_of_the_United_Kingdom.svg.png" :alt="item.original_language" v-if="item.original_language === 'en'">
            <!-- Italian -->
            <img src="../../public/img/Flag_of_Italy.svg.png" :alt="item.original_language" v-else-if="item.original_language === 'it'">
            <!-- French -->
            <img src="../../public/img/Flag_of_France.svg.png" :alt="item.original_language" v-else-if="item.original_language === 'fr'">
            <!-- Unknown -->
            <img src="../../public/img/Unknown_flag_-_European_version.png" :alt="item.original_language" v-else-if="item.original_language !== 'en' || 'it' || 'fr'">
        </div>
        <div class="my_stars">

            <StarRating :star-size="20" :rating="(((item.vote_average.toFixed()) / 10) * 5).toFixed()"></StarRating>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_container{
        width: 50px;
    }
    .my_card {
        width: calc(100% / 6 - 1.5rem);
    }
    
</style>