<template>
  <div class="app-wrapper">
    <page-header></page-header>
    <article class="main"> 
      <nuxt class="content" />
    </article>
    <page-footer></page-footer>
  </div>
</template>

<script>

//import ThemeSwitch from "~/components/ThemeSwitch.vue";
import PageHeader from "~/components/PageHeader.vue";
import PageFooter from "~/components/PageFooter.vue";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
  transition: 'fade'
}
</script>

<style lang="scss">
@import "~/assets/_all.scss";
.main {
  width: 1040px;
  margin: 0 auto;
  padding: 5em 0;
}
</style>
