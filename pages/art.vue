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
                        
                        <v-lazy-image v-bind:src="art.art_image" />
                        <div class="art-info">
                            <p class="title">{{art.title}}, {{year}}</p>
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
  loading: true
};
</script>

<style lang="scss">
.grid {
    display: flex;   
}
.artwork {
    width: 100%;
    //height: auto;
    display: flex;
    flex-direction: row;
    img {
        max-width:60%;
    }
}
.art-info {
    margin-left: 2em;
    font-size: 0.9em;
    min-width: 200px;
    .title {
        font-style: italic;
        margin-bottom: 4px;
    }
    .medium {
        color: grey;
    }
}


</style>