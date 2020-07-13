<template>
  <div class="page-art">
    <div class="tiles">
      <artwork-tile
        v-for="artwork in gallery"
        :key="artwork.id"
        :artwork="artwork"
      ></artwork-tile>
    </div>
  </div>
</template>

<script>
import ArtworkTile from "@/components/ArtworkTile";
export default {
  layout: "art",
  components: {
    ArtworkTile
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      //const homepageContent = (await $prismic.api.getSingle('blog_home')).data
      // Query to get posts content to preview
      const gallery = await $prismic.api.query(
        $prismic.predicates.at("document.type", "art")
      );
      // Returns data to be used in template
      return {
        //homepageContent,
        gallery: gallery.results
        //image: homepageContent.image.url,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss">
.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  @media screen and (max-width: $max-mobile) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
}

// Tile
.image {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
