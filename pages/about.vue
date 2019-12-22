<template>
    <div class="page">
       <!-- <h1>About</h1> -->
       <h3>{{aboutPage.headline}}</h3>
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
    max-width: 50ch;
    img {
        max-width: 100%;
        height: auto;
    }
}
    
</style>