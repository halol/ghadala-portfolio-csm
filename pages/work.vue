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
                <div class="column is-half" v-for="n in 4" v-bind:key="n" v-bind:number="n">
                    <ProjectItem />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectItem from '~/components/ProjectItem.vue'

export default {
  components: {
    ProjectItem,
  },
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