<template>
    <div class="container">
        <art-tile v-for="art in getArt" v-bind:key="art.slug" :artwork="art" :if="art.show" v-bind:data-category="art.category"></art-tile>
    </div>
</template>

<script>

// import PageInfo from '~/components/PageInfo.vue'
import ArtTile from '~/components/ArtTile.vue'

export default {
    computed: {
        getArt() {
            return this.$store.state.allArt;
        },
        createLayout() {
            let artworks = this.$store.state.allArt.length;
        }
    },
    components: {
        ArtTile
    },
    transition: 'fade',
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/variables.scss";
.artwork {
    display: flex;
    figure {
        //padding: .5em;
        background: $light-gray;
        img {
            width: 100%;
            height: auto;
        }
    }
    &:not(:last-child) {
        margin-bottom: 3em;
    }
}
.art-info {
    margin-top: 3em;
    margin-left: 2em;
    font-size: 0.9em;
    min-width: 200px;
    .title {
        font-style: italic;
        font-weight: 500;
        margin-bottom: 4px;
    }
}
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 2em;
    //background: $orange;
    @media screen and (max-width: $max-mobile) {
        display: flex;
        flex-flow: column wrap;
        .item {
            margin-bottom: 2em;
        }
    }
}



</style>