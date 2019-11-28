<template>
    <div class="columns">
        <div class="column is-one-third">
            <page-info 
                title="Artwork"
                description="Some description about work">
            </page-info>
            <!-- <div class="sticky">
                <div>
                    <input type="radio" name="category" id="all" checked="checked" value="all">
                    <label for="all">Everything</label>
                </div>
                <div v-for="art in getArt" v-bind:key="art.slug">
                    <input type="radio" name="category" :id="art.category" :value="art.category">
                    <label v-bind:for="art.category">{{art.category | capitalize}}</label>
                </div>
            </div> -->
        </div>
        <div class="column is-two-thirds">
            <div class="artwork" v-for="art in getArt" v-bind:key="art.slug">              
                <figure>
                    <img v-bind:src="art.cover" />
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

export default {
  computed: {
    getArt() {
      return this.$store.state.allArt;
    }
  },
  components: {
      PageInfo
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