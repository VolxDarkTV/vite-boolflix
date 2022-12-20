<script>
import {store} from '../store';
export default{
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
        <!-- Search bar container -->
        <div>
            <!-- Search Bar -->
            <div class="fixed-top d-flex justify-content-between align-items-center gap-5 container bg-dark p-2 rounded">

                <div class="d-flex align-items-center gap-2">
                    <div class="my_logo rounded">
                        <a href="#">
                          <img class="rounded" src="../../public/img/IMG_2239.jpg" alt="">
                        </a>
                    </div>
    
                    <h1 class="title animate__animated animate__rotateInDownLeft">{{store.titolo}}</h1>
                </div>  

                <div class="d-flex align-items-center gap-2">
                    
                    <input 
                    id="search" 
                    type="text" 
                    placeholder="Search Films Series and more then" 
                    v-model="store.searchFilm" v-on:keyup.enter="$emit('search')" v-on:keypress="$emit('search')" 
                    :class="inactive">
                    
                    <!-- Search Glass -->
                    <label for="search" @click="inactive = 'd-block'" v-if="inactive !== 'd-block'">

                        <font-awesome-icon class="my_search_icon fs-3" icon="fa-solid fa-magnifying-glass" />

                    </label>
                    
                    <!-- Close search -->
                    <font-awesome-icon v-else @click="inactive = 'd-none'" class="my_search_icon_two fs-3" icon="fa-regular fa-circle-xmark"/>

                    <!-- <button class="btn btn-warning" @click.prevent="$emit('search')">
                        search
                    </button> -->
                </div>

            </div>
        </div>
        

    </section>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .my_search_icon{
        color: #fff;
        cursor: pointer;
    }
    .my_search_icon_two{
        color: #fff;
        cursor: pointer;

    }
</style>