<template lang="html">
  <div class="page">
    <div class="hero-section">
      <h1 class="hero">{{siteInfo.sitedescription}}</h1>
    </div>
    
    <recent-work/>
  </div>
</template>

<script>

import RecentWork from "~/components/RecentWork.vue"


export default {
  components: {
    RecentWork
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  },
  transition: 'fade'
}
</script>
<style lang="scss">

</style>
