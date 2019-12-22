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
            <button @click="scrollTop" class="scroll-top"><img src="~/static/top.svg" alt=""></button>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        scrollTop: function() {
            window.scrollTo(0,0);
        }
    }
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
    .scroll-top {
        margin-top: 14vw;
    }
</style>