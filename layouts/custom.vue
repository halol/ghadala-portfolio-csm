<template>
  <div class="app-wrapper">
    <nuxt class="content" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  transition: "fade"
};
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
}
</style>
