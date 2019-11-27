<template>
  <div class="layout">
    <header>
      <div class="flex">
        <div class="column">
          <nav>
            <n-link to="/">Hi!</n-link>
            <n-link to="/work">Work</n-link>
            <n-link to="/art">Artwork</n-link>
            <!-- <n-link to="/publications">Publications</n-link> -->
            <n-link to="/about">About</n-link>
          </nav>
        </div>
        <div class="column">
          <div class="social">
            <a href="https://www.linkedin.com/in/grzegorzhadala/"><img src="linkedin.svg" alt=""></a>
            <a href="https://www.instagram.com/grzesiekmarekjurek/"><img src="instagram.svg" alt=""></a>
          </div>
        </div>
      </div>
      
    </header>
    <nuxt class="content" />
  </div>
</template>

<script>
export default {
  transition: 'fade'
}
</script>

<style lang="scss">
@import "~/assets/_all.scss";

</style>
