<template>
    <div>
        
        <div class="columns">
            <div class="column">
                <h1>Art</h1>
            </div>
            <div class="column">
                <div class="grid">
                    <div class="artwork" v-for="art in getArt" v-bind:key="art.slug">
                        <!-- <img v-bind:src="art.art_image" alt="art.title"> -->
                        <v-lazy-image v-bind:src="art.art_image" />
                        <p>{{art.title}} {{art.medium}} {{art.year}}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

// import ProjectItem from '~/components/ProjectItem.vue'

export default {
  computed: {
    getArt() {
      return this.$store.state.allArt;
    }
  },
  loading: true
};
</script>

<style lang="scss">
.grid {
    display: flex;   
}
.artwork {
    //width: 50%;
    //height: auto;
    img {
        max-width: 100%;
        height: auto;
    }
    &.w-50 {
        width: 50%;
    }
    &.w-25 {
        width: 25%;
    }
}
</style>