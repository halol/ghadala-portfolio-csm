<template lang="html">
  <div class="columns">
    <div class="column">
      <h4>{{siteInfo.sitename}}</h4>
      <h1>{{siteInfo.sitedescription}}</h1>
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
  }
}
</script>

<style lang="css" scoped>

</style>
