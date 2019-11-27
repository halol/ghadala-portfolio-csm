<template lang="html">
  <div class="columns">
    <div class="column">
      <!-- <h4>{{siteInfo.sitename}}</h4> -->
      <h1 class="hero">{{siteInfo.sitedescription}}</h1>  
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  },
  transition: 'fade'
}
</script>
<style lang="scss">
  .hero {
    margin-top: 2em;
  }
</style>
