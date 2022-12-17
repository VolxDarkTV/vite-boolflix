<script>
import StarRating from 'vue-star-rating'
import {store} from '../store';
    export default{
        data(){
            return{
                store,
                inactive: 'd-none',
            }
        },
        components:{
            StarRating,
        },
        props:['item',],
    }
</script>

<template>
    <!-- Card container -->
    <div 
    @mouseover="inactive='d-block'" 
    @mouseleave="inactive='d-none'" 
    class="my_card position-relative card d-flex flex-column align-items-center justify-content-center bg-dark"
    >
        <img 
        v-if="inactive === 'd-none'" 
        class="card" 
        :src="store.imgURL+item.poster_path" 
        :alt="item.original_title">

        <div 
        v-else-if="inactive === 'd-block'" 
        :class="inactive" class="d-flex flex-column align-items-center text-light">
            <!-- Serie/Film -->
            <div class="m-2">
                <span v-if="item.media_type === 'tv'">Serie TV</span>
                <span v-else-if="item.media_type === 'movie'">Film</span>
            </div>
            <span>{{item.title || item.name}}</span>
            <span>{{item.original_title || item.original_name}}</span>
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
                <!-- Poichè in alcuni casi nopn esiste il vote_average, ho impostato questa condizione per evitare errori a causa del mancato valore di vote_average -->
                <StarRating :star-size="20" v-if="item.vote_average !== undefined" :rating="((item.vote_average.toFixed()) / 10) * 5"/>
                <StarRating :star-size="20" v-else-if="item.vote_average === undefined"/>
    
            </div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_container{
        width: 50px;
    }
    .my_card {
        width: calc(100% / 4 - 1.5rem);
    }
    
</style>