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
        <span>{{item.original_title}}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>