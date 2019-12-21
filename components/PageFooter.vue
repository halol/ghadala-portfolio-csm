<template>
    <footer>
        <div class="main">
            <h1>Get in touch.</h1>
            <nav>
                <nuxt-link to="/">LinkedIn</nuxt-link>
                <nuxt-link to="/">Behance</nuxt-link>
                <nuxt-link to="/">Dirbbble</nuxt-link>
                <nuxt-link to="/">Medium</nuxt-link>
                <nuxt-link to="/">Instagram</nuxt-link>
            </nav>
        </div>
        <!-- <span class="page-tit">Grzegorz Hadala</span>
        <nav>
            <nuxt-link to="/">Work</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </nav> -->
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