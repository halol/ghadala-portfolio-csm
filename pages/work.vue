<template>
    <div class="columns">
        <div class="column is-one-third">
            <div class="sticky-info">
                <h1 class="sty">Work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis vitae quam porro deserunt minus sequi et eius obcaecati non sapiente quae nam necessitatibus, placeat exercitationem qui cum. Nesciunt, deserunt?</p>
            </div>
        </div>

        <div class="column is-two-thirds">
            <div class="columns is-multiline">
                <div class="column is-half" v-for="work in allWork" v-bind:key="work.index">
                    
                        <div class="project-item">
                            <figure class="mockup">
                                <!-- Sqaure -->
                                <!-- <img src="screen.png" alt=""> -->
                                <img src="screen.png" />
                            </figure>
                            <div class="caption">
                                <!-- Free -->
                                <p class="title">{{work.title}}</p>
                                <p class="description">{{work.description}}</p>
                                <n-link :to=work._path>{{work._path}}</n-link>
                                <n-link :to="work._path">GO</n-link>
                                <p>{{work}}</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectItem from '~/components/ProjectItem.vue'

export default {
  computed: {
    allWork() {
      return this.$store.state.allWork;
    },
  },
  loading: true
}
</script>

<style lang="scss">

</style>