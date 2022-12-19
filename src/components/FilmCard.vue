<script>
import FlagLanguage from './card_components/FlagLanguage.vue';
import StarRating from 'vue-star-rating';
import {store} from '../store';
    export default{
        data(){
            return{
                store,
                // inactive: 'd-none',
            }
        },
        components:{
            StarRating,
            FlagLanguage,
        },
        props:['item',],
    }
</script>

<template>
    <!-- Card container -->
    <div 
    class="my_card card flex-column align-items-center justify-content-center bg-dark"
    >
        <!-- Cover Image -->
        <div>
            <img v-if="item.poster_path !== undefined" 
            class="card" 
            :src="store.imgURL+item.poster_path" 
            :alt="item.original_title">
            <!-- Cover NOT FOUND 404 -->
            <img v-else-if="item.poster_path === undefined" src="../../public/img/IMG_2239.jpg" :alt="item.original_title">
        </div>

        <!-- INFO -->
        <div 
         class="my_over_info card position-absolute flex-column align-items-center text-light gap-1 p-4">

            <!-- Serie/Film -->
            <div class="text-warning">
                <span v-if="item.media_type === 'tv'">Serie TV</span>
                <span v-else-if="item.media_type === 'movie'">Film</span>
            </div>
            <!-- Title -->
            <span>
                <span class="fw-bold">Titolo:</span> 
                {{item.title || item.name}}
            </span>
            <!-- Original Title -->
            <span v-if="item.title !== item.original_title || item.name !== item.original_name & item.original_title !== undefined & item.original_name !== undefined">
                <span class="fw-bold">Titolo originale:</span>
                {{item.original_title || item.original_name}}
            </span>

            <!-- Name Of Language -->
            <!-- <span>{{item.original_language}}</span> -->

            <!-- Flags -->
           <FlagLanguage :item="item"/>
            
            <div class="my_stars">
                <!-- Poichè in alcuni casi nopn esiste il vote_average, ho impostato questa condizione per evitare errori a causa del mancato valore di vote_average -->
                <StarRating :star-size="20" v-if="item.vote_average !== undefined" :rating="((item.vote_average.toFixed()) / 10) * 5"/>
                <StarRating :star-size="20" v-else-if="item.vote_average === undefined"/>
            </div>
            
            <!-- Overview -->
            <span v-if="item.overview !== undefined">
                <span class="fw-bold">Overview:</span>
                {{item.overview}}
            </span>

        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_card {
        width: calc(100% / 4 - 1.5rem);
        cursor: pointer;
    }
    .my_over_info{
        display: none;
        overflow-y: auto;
        height: 100%;
    }
    .my_card:hover .my_over_info{
        display: flex;
        background-color: #151414;
        border: solid #ffac07 1px;
        // When have no Cover Image
        width: 100%;
    }
</style>