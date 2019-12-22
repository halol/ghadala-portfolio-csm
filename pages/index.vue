<template lang="html">
  <div class="page">
    <div class="hero-section">
      <h1 class="hero">{{siteInfo.sitedescription}}</h1>
    </div>
    <intro-page />
    <recent-work/>
  </div>
</template>

<script>

import RecentWork from "~/components/RecentWork.vue"
import IntroPage from "~/components/IntroPage.vue"

export default {
  components: {
    RecentWork,
    IntroPage
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
