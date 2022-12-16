<script>
    export default{
        props:['item',],
    }
</script>

<template>
    <div class="card">
        <span>{{item.original_title}}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>