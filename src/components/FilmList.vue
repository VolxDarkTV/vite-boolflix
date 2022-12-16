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
    <section class="container">
        <div class="row">
            <div class="d-flex flex-wrap justify-content-center gap-3 col">
                <!-- Card Component -->
                <FilmCard v-for="(film, index) in store.cardList" :key="film.id" :item="film"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>