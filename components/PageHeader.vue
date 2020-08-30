<template>
  <header class="header">
    <span class="page-tit">Grzegorz Hadala—Product Designer</span>

    <nav class="main-menu">
      <nuxt-link to="/">Start here</nuxt-link>
      <nuxt-link to="/work">Work</nuxt-link>
      <nuxt-link to="/art">Art</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header.header {
  padding: 48px;
  display: flex;
  font-size: 20px;
  font-family: $font-style-bold;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //position: sticky;
  @media screen and (max-width: 720px) {
    span {
      display: none;
    }
    //padding: 1vw 7vw;
    padding: 0 48px;
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
      align-items: center;
      //margin: 0 auto;
      a {
        width: auto;
        //margin: 0;
        &:not(:last-child) {
          margin-right: 24px;
        }
        //background: red;
        height: 48px;
        text-align: center;
        color: t($light-theme, "mobile-link-normal");
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &:hover {
          color: t($light-theme, "mobile-link-hover");
        }
        &.exact-active-link {
          color: t($light-theme, "mobile-link-active");
        }
      }
    }
  }
}

nav.main-menu {
  a {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
