<script>
import FlagLanguage from './card_components/FlagLanguage.vue';
import StarRating from 'vue-star-rating';
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
            FlagLanguage,
        },
        props:['item',],
    }
</script>

<template>
    <!-- Card container -->
    <div 
    @mouseover="inactive='d-flex'" 
    @mouseleave="inactive='d-none'" 
    class="my_card card flex-column align-items-center justify-content-center bg-dark"
    >
        <!-- Cover Image -->
        <div v-if="inactive === 'd-none'">
            <img 
            class="card" 
            :src="store.imgURL+item.poster_path" 
            :alt="item.original_title">
        </div>

        <!-- INFO -->
        <div 
        v-else-if="inactive === 'd-flex'" 
         class="my_over_info d-flex flex-column align-items-center text-light gap-1 p-3">

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
           <FlagLanguage :item="item"/>
            
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
    .my_card {
        width: calc(100% / 5 - 1.5rem);
        cursor: pointer;
    }
    .my_over_info{
        overflow-y: auto;
        max-height: 400px;
    }
    
</style>