<template>
  <div class="layout">
    <header>
      <div class="flex">
        <div class="column">
          <nav>
            <n-link to="/">Hi!</n-link>
            <n-link to="/work">Work</n-link>
            <n-link to="/art">Artwork</n-link>
            <n-link to="/publications">Publications</n-link>
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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>

<style lang="scss">
@import "~/assets/_all.scss";

$orange: #F5894C;
$black: #000;
$blue: #0E3FF2;

body {
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
  padding: 3em;
  font-size: 17px;
  line-height: 1.5;
  height: calc(100vh - (6em));
}

* {
  //outline: 1px solid red;
}


.layout {
  height: calc(100vh - (6em));;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex {
  display: flex;
  justify-content: space-between; 
}

header {
  padding: 1em 0;
  border-bottom:2px solid $black;
  margin-top: -2em;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}

.social {
  display: flex;
  a {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 24px;
    width: 24px;
    border-radius: 4px;
    &:first-child {
      margin-right: 1em;
    }
    &:hover {
      background: rgba($black, 0.05);
    }
  }
  img {
    width: 16px;
    height: 16px;
  }
}
nav {
  font-size: 0.9em;
  * {
    margin-right: 4em;
    &:last-child {
      margin: 0;
    }
  }
  a {
    color: black;
    text-decoration: none;
    font-weight: 600;
    // &.active-link {
    //   color: green;
    // }
    transition: all 0.25s ease;
    &.exact-active-link, &:hover {
      //border-bottom: 2px solid $orange;
      color: $orange;
    }
  }
}
</style>
