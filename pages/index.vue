<template lang="html">
  <div class="columns">
    <div class="column">
      <p class="post-link" v-for="post in blogPosts">
        
        <n-link :to="post._path">{{post.title}}</n-link>
        <span>{{post._path}}</span>

        </p>
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
