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
  scrollToTop: true,
  components: {
    PageHeader,
    PageFooter
  },
  transition: "fade"
};
</script>

<style lang="scss">
.main {
  margin: 0 14vw;
  padding: 5em 0;
  @media screen and (max-width: 1000px) {
    margin: 0 48px;
    padding-top: 48px;
    padding-bottom: 25vw;
  }
}
</style>
