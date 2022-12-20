<script>
import {store} from '../store';
import FilmCard from './FilmCard.vue';
export default{
    components:{
        FilmCard,
    },
    data(){
        return{
            store,
            inactive: 'd-none',
        }
    },
}
</script>

<template>
    <!-- Add this section to remove the console vue Warning -->
    <section>
        
        <!-- Zero container -->
        <section v-if="store.searchFilm === ''">
            <div>
                <h1>No Results</h1>
            </div>
        </section>

        <!-- Card container -->
        <section class="my_card_container container container-md" v-else>
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
    .my_search_icon{
        color: #fff;
        cursor: pointer;
    }
    .my_card_container{
        margin-top: 80px;
    }
</style>