<template>
    <div class="columns">
        <div class="column">
            <div class="artwork" v-for="art in getArt" v-bind:key="art.slug">              
                <figure>
                    <!-- <img v-bind:src="art.cover" /> -->
                    <show-image :image="art.cover" :title="art.title"></show-image>
                </figure>
                <div class="art-info">
                    <p class="title">{{art.title}}<span :if="art.year">, {{art.year}}</span></p>
                    <p class="medium">{{art.medium}}</p>
                    <p :if="art.category" class="category">{{art.category}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PageInfo from '~/components/PageInfo.vue'
import ShowImage from '~/components/ShowImage.vue'

export default {
  computed: {
    getArt() {
      return this.$store.state.allArt;
    }
  },
  components: {
      PageInfo,
      ShowImage
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
        padding: .5em;
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
</style>