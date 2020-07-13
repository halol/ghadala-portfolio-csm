<template>
  <div class="recent-work-section">
    <p class="category">Recent projects</p>
    <!-- Import a tile component -->
    <project-item
      v-for="(work, index) in orderedWorks"
      v-bind:key="index"
      v-bind:work="work"
    ></project-item>
    <nuxt-link to="/work">All projects</nuxt-link>
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import _ from "lodash";

export default {
  components: {
    ProjectItem
  },
  computed: {
    allWork() {
      return this.$store.state.allWork;
    },
    orderedWorks: function() {
      return _.orderBy(this.allWork, "year", ["desc"]).slice(0, 2);
    }
  }
};
</script>

<style lang="scss">
@import "~assets/variables.scss";
.recent-work-section {
  padding-top: 4em;
}
.category {
  font-size: 1.2em;
  color: t($light-theme, "category");
  font-family: $font-style-bold;
  text-transform: uppercase;
}
</style>
