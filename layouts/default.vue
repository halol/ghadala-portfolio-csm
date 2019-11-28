<template>
  <div class="app-wrapper">
    <article class="main"> 
      <nuxt class="content" />
    </article>
    <header>
      <div class="navigation">
        <nav>
          <n-link to="/">Hi!</n-link>
          <n-link to="/work">Work</n-link>
          <n-link to="/art">Artwork</n-link>
          <n-link to="/about">About</n-link>
        </nav>
      </div>
      <div class="options">
        <a href="https://www.linkedin.com/in/grzegorzhadala/"><img src="linkedin.svg" alt=""></a>
        <a href="https://www.instagram.com/grzesiekmarekjurek/"><img src="instagram.svg" alt=""></a>
      </div>
    </header>
  </div>
</template>

<script>

//import ThemeSwitch from "~/components/ThemeSwitch.vue";

export default {
  components: {
    //ThemeSwitch
  },
  transition: 'fade'
}
</script>

<style lang="scss">
@import "~/assets/_all.scss";

</style>
