<template>
  <div class="artwork">
    <div class="art" @click="toggle()" :class="{open: isOpen()}">
      <img :src="art.url" alt="Alt" />
    </div>
    <div class="description">
      <div class="name">
        <strong>{{art.title}}</strong>
      </div>
      <div class="info">
        <small>{{ art.year}}, {{art.media}}</small>
      </div>
      <div v-if="art.purchase || art.price" class="purchase">
        <a :href="art.purchase">
          Buy now
          <span class="amount" v-if="art.price">{{ formatPrice(art.price)}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    art: Object
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    renderBackground(art) {
      return `background-image: url(${art}`;
    },
    toggle() {
      //alert(`${art} and ${this.open}`);
      return (this.open = !this.open);
    },
    isOpen(open) {
      return this.open;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
<style lang="scss" scoped>
.artwork {
  display: flex;
  flex-direction: column;
  //outline: 4px solid rgba(green, 0.2);
}
.description {
  padding: 2em;
  //background: white;
  //outline: 4px solid rgba(pink, 0.2);
  transition: all 0.25s ease;
  .purchase {
    font-size: 0.8em;
  }
}
.art {
  width: 100%;
  height: auto;
  //padding-top: 100%;
  img {
    width: 100%;
    height: auto;
    transition: all 300ms ease;
  }
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  transition: all 300ms ease;
  &:hover {
    cursor: pointer;
  }
  &.open {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: t($dark-theme, "bg");
    height: 100vh;
    width: auto;
    > img {
      object-fit: contain;
      height: 100%;
      width: 100%;
      @media screen and (min-width: 600px) {
        padding: 5em;
      }
    }
    + .description {
      display: none;
    }
  }
  &.square {
    grid-column: auto / 2;
    grid-row: auto / 2;
  }
}

@media screen and (min-width: 600px) {
  .tall {
    grid-row: span 2 / auto;
  }
  .wide {
    grid-column: span 2 / auto;
  }
  .artwork:nth-child(2n-1) {
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;
  }
  .artwork:nth-child(2n) {
    padding-top: 25%;
  }
}
</style>