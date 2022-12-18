<script>
    export default{
       
        props:['item',],
    }
</script>

<template>
    <!-- Flags -->
    <div class="my_container">
        <!-- English -->
        <img src="../../../public/img/flags/Flag_of_the_United_Kingdom.svg.png" :alt="item.original_language" v-if="item.original_language === 'en'">
        <!-- Italian -->
        <img src="../../../public/img/flags/Flag_of_Italy.svg.png" :alt="item.original_language" v-else-if="item.original_language === 'it'">
        <!-- French -->
        <img src="../../../public/img/flags/Flag_of_France.svg.png" :alt="item.original_language" v-else-if="item.original_language === 'fr'">
        <!-- Japanese -->
        <img src="../../../public/img/flags/Flag_of_Japan.svg" :alt="item.original_language" v-else-if="item.original_language === 'ja'">
        <!-- Unknown -->
        <img src="../../../public/img/flags/Unknown_flag_-_European_version.png" :alt="item.original_language" v-else-if="item.original_language !== 'en' || 'it' || 'fr' || 'ja'">
    </div>
</template>