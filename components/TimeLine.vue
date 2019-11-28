<template>
    <div class="timeline">
        <div class="box" v-for="(index, n) in 10" :key="index">
            <h4 class="year">2019</h4>
            <p class="event">Started with design</p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    @import '~/assets/variables.scss';
    .timeline {
        width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        overflow-x: auto;
        margin-left: -3em;
        margin-right: -3em;
        //padding-right: 3em;
    }
    .box {
        padding: 1em 3em;
        background:$blue;
        color: $orange;
        min-width: 200px;
        position: relative;
        
        &:not(:last-child) {
            margin-right: 0.5em;
        }
        &:first-child {
            margin-left: 3em;
        }
        &:last-child {
            // margin-right: 3em;
            // &:before {
            //     content: '';
            //     display: inline-block;
            //     width: 3em;
            //     height: inherit;
            //     background: yellow;
            //     z-index: 100;
            //     position: absolute;
            // }
        }
    }
</style>