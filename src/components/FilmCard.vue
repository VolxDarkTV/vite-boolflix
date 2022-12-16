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
    <div class="card">
        <img :src="store.imgURL+item.poster_path" alt="">
        <span>{{item.title}}</span>
        <span>{{item.original_title}}</span>
        <span>{{item.original_language}}</span>
        <div>
            <span>{{item.vote_average}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>