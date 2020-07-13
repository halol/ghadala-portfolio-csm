<template>
  <div class="app-wrapper">
    <page-header></page-header>

    <nuxt class="content" />

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
  }
};
</script>

<style lang="scss">
.main {
  //width: 1040px;
  margin: 0 14vw;
  padding: 5em 0;
  @media screen and (max-width: 1000px) {
    margin: 0 7vw;
    padding-top: 7vw;
    padding-bottom: 25vw;
    &.wide {
      margin: 0 7vw;
      padding-top: 7vw;
      padding-bottom: 25vw;
    }
  }
  &.wide {
    padding: 48px;
    margin: 0;
  }
}
</style>
