<template>
  <div class="back-button" @click="$router.back()">
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
export default {};
</script>

<style lang="scss" scoped>
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
</style>