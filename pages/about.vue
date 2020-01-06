<template>
    <div class="page">
       <!-- <h1>About</h1> -->
       <h1>{{aboutPage.headline}}</h1>
       <div class="body" v-html="$md.render(aboutPage.body)"/>
    </div>
</template>
<script>


export default {
    components: {

    },
    computed: {
        aboutPage() {
            return this.$store.state.aboutPage;
        }
    },
    transition: 'fade'
}
</script>

<style lang="scss">

.body {
    max-width: 75ch;
    img {
        max-width: 100%;
        height: auto;
    }
}
    
</style>