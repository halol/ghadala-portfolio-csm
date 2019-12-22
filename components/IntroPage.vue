<template>
    <div class="intro-page">
        <p class="category">The things I do</p>
       <p>{{introPage.headline}}</p>
       <div class="body" v-html="$md.render(introPage.body)"></div>
    </div>
</template>

<script>
export default {
    computed: {
        introPage() {
            return this.$store.state.introPage;
        }
    },
}
</script>

<style lang="scss">
.intro-page {
    margin-top: 6em;
}
</style>