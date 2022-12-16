<script>
import {store} from '../store';
    export default{
        data(){
            return{
                store,
            }
        },
        props:['item',],
    }
</script>

<template>
    <div class="card d-flex flex-column align-items-center">
        <img :src="store.imgURL+item.poster_path" :alt="item.original_title">
        <span>{{item.title}}</span>
        <span>{{item.original_title}}</span>
        <span>{{item.original_language}}</span>
        <!-- Flags -->
        <div class="my_container">
            <!-- English -->
            <img src="../../public/img/Flag_of_the_United_Kingdom.svg.png" :alt="item.original_language" v-if="item.original_language === 'en'">
            <!-- Italian -->
            <img src="../../public/img/Flag_of_Italy.svg.png" :alt="item.original_language" v-if="item.original_language === 'it'">
            <!-- French -->
            <img src="../../public/img/Flag_of_France.svg.png" :alt="item.original_language" v-if="item.original_language === 'fr'">
            <!-- Unknown -->
            <img src="../../public/img/Unknown_flag_-_European_version.png" :alt="item.original_language" v-if="item.original_language !== 'en' || 'it' || 'fr'">
        </div>
        <div>
            <span>{{item.vote_average}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_container{
        width: 100px;
    }
</style>