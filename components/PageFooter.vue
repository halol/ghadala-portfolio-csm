<template>
  <footer>
    <div class="main">
      <h2>Get in touch.</h2>
      <nav>
        <a target="_blank" href="https://www.linkedin.com/in/grzegorzhadala/">LinkedIn</a>
        <a target="_blank" href="https://www.behance.net/greghadala">Behance</a>
        <a target="_blank" href="https://dribbble.com/grzegorzghadala">Dribbble</a>
        <a target="_blank" href="https://medium.com/@grzegorzhadala">Medium</a>
        <a target="_blank" href="https://www.instagram.com/grzesiekmarekjurek/">Instagram</a>
      </nav>
      <button @click="scrollTop" class="scroll-top" id="scrolltop-icon">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5278 9.97998L9.52783 4.97998L4.52783 9.97998"
            stroke="#444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5278 20.98H13.5278C12.467 20.98 11.4496 20.5586 10.6994 19.8084C9.94926 19.0583 9.52783 18.0408 9.52783 16.98V4.97998"
            stroke="#444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTop: function() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style lang="scss">
@import "~assets/variables.scss";
footer {
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
  &:hover {
    cursor: pointer;
  }
}
</style>