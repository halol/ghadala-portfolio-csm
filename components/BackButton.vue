<template>
  <div class="back-button" @click="goBack">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      class="back-arrow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="svg-stroke"
        d="M19 12H5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="svg-stroke"
        d="M12 19L5 12L12 5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: ["parent"],
  methods: {
    goBack: function() {
      if (!this.parent) {
        alert("no parent defined");
      } else {
        this.$router.push(`/${this.parent}`);
      }
    }
  }
};
</script>

<style lang="scss">
.back-button {
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2em;
  left: 2em;
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
  .back-button {
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