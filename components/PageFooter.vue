<template>
    <footer>
        <div class="main">
            <h1>Get in touch.</h1>
            <nav>
                <a target="_blank" href="https://www.linkedin.com/in/grzegorzhadala/">LinkedIn</a>
                <a target="_blank" href="https://www.behance.net/greghadala">Behance</a>
                <a target="_blank" href="https://dribbble.com/grzegorzghadala">Dribbble</a>
                <a target="_blank" href="https://medium.com/@grzegorzhadala">Medium</a>
                <a target="_blank" href="https://www.instagram.com/grzesiekmarekjurek/">Instagram</a>
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
        //padding: 48px;
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