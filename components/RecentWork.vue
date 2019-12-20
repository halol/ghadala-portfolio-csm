<template>
    <div class="recent-work-section">
        <p class="category">Recent projects</p>
        <!-- Import a tile component -->
        <project-item v-for="index in 3" v-bind:key="index"></project-item>
    </div>
</template>


<script>

import ProjectItem from "~/components/ProjectItem.vue"

export default {
    components: {
        ProjectItem
    }
}
</script>

<style lang="scss">
@import "~assets/variables.scss";
.recent-work-section {
    padding-top: 4em;
}
.category {
  font-size: 0.8em;
  color: $accent;
  font-family: $bold-font;
  text-transform: uppercase;
}
</style>