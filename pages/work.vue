<template>
    <div>
        <h1>Work</h1>   
        <ProjectItem v-for="n in 4" v-bind:key="n" v-bind:number="n"/>
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