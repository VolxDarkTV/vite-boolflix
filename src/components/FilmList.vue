<script>
import { def } from '@vue/shared';
import {store} from '../store';
import FilmCard from './FilmCard.vue';
export default{
    components:{
        FilmCard,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <!-- Add this section to remove the console vue Warning -->
    <section>
        <!-- Search bar container -->
        <div>
            <!-- Search Bar -->
            <div class="d-flex justify-content-between align-items-center gap-2 container bg-dark mb-3 p-2 rounded">

                <div class="d-flex align-items-center gap-2">
                    <div class="my_logo rounded">
                        <a href="#">
                          <img class="rounded" src="../../public/img/IMG_2239.jpg" alt="">
                        </a>
                    </div>
    
                    <h1 class="title animate__animated animate__rotateInDownLeft">{{store.titolo}}</h1>
                </div>  

                <div class="d-flex gap-2">
                    <input type="text" placeholder="Search Film" v-model="store.searchFilm" v-on:keypress="$emit('search')" v-on:keyup.enter="$emit('search')">
                    <button class="btn btn-warning" @click.prevent="$emit('search')">
                        search
                    </button>
                </div>

            </div>
        </div>
        
        <!-- Zero container -->
        <section v-if="store.searchFilm === ''">
            <div>
                <h1>No Results</h1>
            </div>
        </section>
        <!-- Card container -->
        <section class="container" v-else>
            <div class="row">
                <div class="d-flex flex-wrap justify-content-center gap-3 col">
                    <!-- Card Component -->
                    <FilmCard v-for="film in store.cardList" :key="film.id" :item="film"/>
                </div>
            </div>
        </section>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>