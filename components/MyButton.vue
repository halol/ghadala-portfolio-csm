<template>
  <button @click="handleClick()" :class="['button', buttonStyle]">
    <slot />
  </button>
</template>
<script>
export default {
  props: ["destination", "variant"],
  methods: {
    handleClick: function() {
      // if (this.destination) {
      console.log("click");
      // }
    }
  },
  computed: {
    buttonStyle: function() {
      if (this.variant) {
        return this.variant;
      } else {
        return "dark";
      }
    }
  }
};
</script>
<style lang="scss">
.button {
  display: flex;
  flex-direction: row;
  padding: 16px 24px;

  font-family: Rational Display DEMO;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  flex: none;
  order: 0;
  align-self: center;
  transition: all 250ms ease;
  will-change: contents;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  &.dark {
    background: t($dark-theme, "bg");
    color: t($dark-theme, "text");

    &:hover {
      background: t($dark-theme, "accent");
    }
  }
  &.light {
    background: t($light-theme, "bg");
    color: t($light-theme, "text");
    &:hover {
      background: t($light-theme, "accent");
      color: t($light-theme, "bg");
    }
  }
}
</style>
