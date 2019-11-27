<template>
    <div>
        
        <div class="columns">
            <div class="column is-one-third">
                <div class="sticky-info">
                    <h1 class="sty">Artwork</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis vitae quam porro deserunt minus sequi et eius obcaecati non sapiente quae nam necessitatibus, placeat exercitationem qui cum. Nesciunt, deserunt?</p>
                </div>
            </div>
            <div class="column is-two-thirds">
                    <div class="artwork" v-for="art in getArt" v-bind:key="art.slug">
                        <!-- <img v-bind:src="art.art_image" alt="art.title"> -->
                        
                        <img v-bind:src="art.cover" />
                        <div class="art-info">
                            <p class="title">{{art.title}}, {{art.year}}</p>
                            <p class="medium">{{art.medium}}</p>
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
  transition: 'fade'
};
</script>

<style lang="scss">

</style>