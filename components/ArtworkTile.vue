<template>
  <div class="artwork-tile">
    <nuxt-link :to="artLink" class="artwork-link">
      <prismic-image :field="this.artwork.data.artwork_cover" class="artwork-thumbnail-image" />
    </nuxt-link>
    <div class="artwork-meta">
      <p
        class="status-available"
        v-if="this.artwork.data.status == 'Available'"
      >Available for €{{this.artwork.data.price}}</p>
      <p class="status-reserved" v-else-if="this.artwork.data.status == 'Reserved'">Reserved</p>
      <p class="status-sold" v-else>Sold for €{{this.artwork.data.price}}</p>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
export default {
  props: ["artwork"],
  data() {
    return {
      link: "",
      galleryUrls: []
    };
  },
  computed: {
    artLink: function() {
      return `art/${this.artwork.uid}`;
    }
  },
  filters: {
    formatPrice: function(price) {
      if (!price) {
        return "(Price on request)";
      } else {
        return `€${price}`;
      }
    }
  },
  created() {
    this.link = LinkResolver(this.artwork);
  }
};
</script>

<style lang="scss">
.artwork-tile {
  width: 100%;
}
.artwork-link {
  display: block;
  max-height: 248px;
  height: 248px;
  padding-bottom: 100%;
  position: relative;
}
.artwork-meta {
  text-align: center;
  padding: 16px;
}
.artwork-thumbnail-image {
  object-fit: scale-down;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
