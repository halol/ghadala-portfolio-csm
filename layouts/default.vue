<template>
  <div class="layout">
    <header>
      <div class="flex">
        <div class="column">
          <nav>
            <n-link to="/">Hi!</n-link>
            <n-link to="/work">Work</n-link>
            <n-link to="/art">Art</n-link>
            <n-link to="/about">About</n-link>
          </nav>
        </div>
        <div class="column">
          social
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
body {
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
  padding: 3em;
  font-size: 17px;
  line-height: 1.5;
}

.flex {
  display: flex;
  justify-content: space-between; 
}

header {
  padding: 24px 0;
  border-bottom:2px solid black;
  margin-top: -24px;
}
nav {
  a {
    color: black;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: red;
    }
  }
}
</style>
