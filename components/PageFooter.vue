<template>
  <footer>
    <div class="main">
      <h2>Get in touch.</h2>
      <nav class="footer-links">
        <a target="_blank" href="https://www.linkedin.com/in/grzegorzhadala/">LinkedIn</a>
        <a target="_blank" href="https://www.behance.net/greghadala">Behance</a>
        <a target="_blank" href="https://dribbble.com/grzegorzghadala">Dribbble</a>
        <a target="_blank" href="https://medium.com/@grzegorzhadala">Medium</a>
        <a target="_blank" href="https://www.instagram.com/grzesiekmarekjurek/">Instagram</a>
      </nav>
      <div @click="scrollTop" class="scroll-top" id="scrolltop-icon">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          class="icon--scroll-top"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="svg-stroke"
            d="M14.5278 9.97998L9.52783 4.97998L4.52783 9.97998"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="svg-stroke"
            d="M20.5278 20.98H13.5278C12.467 20.98 11.4496 20.5586 10.6994 19.8084C9.94926 19.0583 9.52783 18.0408 9.52783 16.98V4.97998"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
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
// footer {
//   display: flex;
//   font-size: 20px;
//   font-family: $font-style-bold;
//   justify-content: space-between;
// }
// nav {
//   a {
//     &:not(:last-child) {
//       margin-right: 32px;
//     }
//   }
// }

nav.footer-links {
  //order: 3;
  //display: flex;
  //align-items: center;
  @media screen and (max-width: 720px) {
    width: 100%;
    flex-flow: column;
    justify-content: flex-start;
    a {
      display: block;
      border-radius: 999px;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
      width: 100%;
      padding: 12px 24px;
      background: $light;
      &:active {
        background: $primary;
        color: $white;
      }
      //border-bottom: 1px solid t($light-theme, "link-hover");
      margin-top: 1px;
    }
  }
  a {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
}

.scroll-top {
  margin-top: 14vw;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  //position: fixed;
  //top: 2em;
  //left: 2em;
  transition: all 300ms ease;
  z-index: 999;
  .svg-stroke {
    transition: all 300ms ease;
    stroke: $medium;
  }
  &:hover {
    background: $light;
    cursor: pointer;
    .svg-stroke {
      stroke: $black;
    }
  }
}
@media screen and (max-width: $max-mobile) {
  .scroll-top {
    background: t($light-theme, "text");
    bottom: 24px;
    left: 24px;
    top: auto;
    .svg-stroke {
      stroke: t($light-theme, "bg");
    }
  }
}
</style>