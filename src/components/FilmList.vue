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

        <div>
            <!-- Search Bar -->
            <div class="d-flex justify-content-center gap-2 container bg-secondary mb-3 p-2 rounded">
                    <input type="text" placeholder="Search Film" v-model="store.searchFilm">
                    <button class="btn btn-warning" @click.prevent="$emit('search')">
                        search
                    </button>
                </div>
        </div>
    
        <section v-if="store.searchFilm === ''">
            <div>
                <h1>No Results</h1>
            </div>
        </section>
    
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