<template>
    <header>
        <span class="page-tit">Grzegorz Hadala</span>
        <nav>
            <nuxt-link to="/">Start here</nuxt-link>
            <nuxt-link to="/work">Work</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
@import "~assets/variables.scss";
    header {
        padding: 48px;
        display: flex;
        font-size: 20px;
        font-family: $bold-font;
        justify-content: space-between;
    }
    nav {
        a {
            &:not(:last-child) {
                margin-right: 32px;
            }
        }
    }
</style>