<template>
  <div class="work">
    <project-item v-for="(work, index) in orderedWorks" v-bind:key="index" :work="work" />
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem";
import _ from "lodash";

export default {
  computed: {
    allWork() {
      return this.$store.state.allWork;
    },
    orderedWorks: function() {
      return _.orderBy(this.allWork, "year", ["desc"]);
    }
  },
  components: {
    ProjectItem
  },
  transition: "fade"
};
</script>

<style lang="scss">
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  .grid-item {
    display: flex;
    justify-content: stretch;
    flex-flow: column nowrap;
  }
  &:first-child {
    grid-column-end: span 2;
  }

  @media screen and (max-width: $max-mobile) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
  }
  @media screen and (max-width: 414px) {
    display: block;
    .grid-item {
      &:not(:last-child) {
        margin-bottom: 2em;
      }
    }
  }
}

.tiles {
  .column {
    width: calc(33% - 4em) !important;
  }
}
</style>