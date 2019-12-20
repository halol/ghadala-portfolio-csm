<template>
    <footer>
        <span class="page-tit">Grzegorz Hadala</span>
        <nav>
            <nuxt-link to="/">Work</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </nav>
    </footer>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
@import "~assets/variables.scss";
    footer {
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