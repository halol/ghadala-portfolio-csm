<template>
  <div :class="['chip', color]">
    <small>{{label}}</small>
  </div>
</template>

<script>
export default {
  props: ["color", "label"]
};
</script>


<style lang="scss" scoped>
.chip {
  border-radius: 999px;
  padding: 0 16px;
  font-family: $font-style-bold;
  display: inline-flex;
  height: 36px;
  line-height: 37px;
  @media screen and (max-width: $max-mobile) {
    width: 100%;
    display: block;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  // font-size: small
  &.default {
    background: t($light-theme, "chip-default");
    color: t($light-theme, "text");
  }
  &.primary {
    background: t($light-theme, "chip-accent");
    color: t($dark-theme, "text");
  }
}
::selection {
  background: transparent;
  color: inherit;
}
</style>