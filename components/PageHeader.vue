<template>
  <header>
    <span class="page-tit">Grzegorz Hadala—Product Designer</span>

    <nav class="main-menu open">
      <nuxt-link to="/">Start here</nuxt-link>
      <nuxt-link to="/work">Work</nuxt-link>
      <!-- <nuxt-link to="/art">Art</nuxt-link> -->
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>


<style lang="scss">
header {
  padding: 48px;
  display: flex;
  font-size: 20px;
  font-family: $font-style-bold;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  span {
    order: 1;
  }
  @media screen and (max-width: 720px) {
    span {
      display: none;
    }
    padding: 1vw 7vw;
    font-size: 0.9em;
    bottom: -1px;
    background: t($light-theme, "mobile-header");
    position: fixed;
    color: white;
    right: 0;
    left: 0;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;

    nav.main-menu {
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      a {
        width: auto;
        margin: 0;
        text-align: center;
        color: t($light-theme, "mobile-link-normal");
        display: inline-flex;
        &:hover {
          color: t($light-theme, "mobile-link-hover");
        }
        &.exact-active-link {
          //border-bottom: 2px solid $orange;
          color: t($light-theme, "mobile-link-active");
        }
      }
    }
  }
}
nav {
  order: 3;
  display: flex;
  //align-items: center;
  @media screen and (max-width: 720px) {
    width: 100%;
    flex-flow: column;
    justify-content: flex-start;
    a {
      margin: 0;
      width: 100%;
      display: block;
      padding: 3vw 0;
      border-bottom: 1px solid t($light-theme, "link-hover");
      margin-top: 1px;
    }
  }
  a {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
}
</style>