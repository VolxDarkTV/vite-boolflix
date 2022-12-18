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
    @mouseover="inactive='d-flex'" 
    @mouseleave="inactive='d-none'" 
    class="my_card position-relative card flex-column align-items-center justify-content-center bg-dark"
    >
        <img 
        v-if="inactive === 'd-none'" 
        class="card" 
        :src="store.imgURL+item.poster_path" 
        :alt="item.original_title">

        <!-- INFO -->
        <div 
        v-else-if="inactive === 'd-flex'" 
         class="my_over_info d-flex flex-column align-items-center text-light gap-1">
            <!-- Serie/Film -->
            <div class="text-warning">
                <span v-if="item.media_type === 'tv'">Serie TV</span>
                <span v-else-if="item.media_type === 'movie'">Film</span>
            </div>
            <span>
                <span class="fw-bold">Titolo:</span> 
                {{item.title || item.name}}
            </span>
            <span>
                <span class="fw-bold">Titolo originale:</span>
                {{item.original_title || item.original_name}}
            </span>

            <!-- Name Of Language -->
            <!-- <span>{{item.original_language}}</span> -->

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
            <span>
                <span class="fw-bold">Overview:</span>
                {{item.overview}}
            </span>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_container{
        width: 50px;
    }
    .my_card {
        width: calc(100% / 5 - 1.5rem);
        cursor: pointer;
    }
    .my_over_info{
        overflow-y: auto;
        max-height: 400px;
    }
    
</style>