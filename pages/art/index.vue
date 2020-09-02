<template>
  <div class="page-art">
    <div class="hero">
      <h2>A short story of my passion</h2>
      <p>My paintings don't have any story or a specific meaning. However, I want to tease the audience and let them find their stories in my work. I usually let my brushes wander on the canvas, experiment with composition, colour and a freeform of what I do.</p>
      <p>
        You can support me by buying one (or more) of my paintings. Prices can be negotiated.
        <strong>
          For commissions please reach me out on
          <a
            href="https://www.instagram.com/grzesiekmarekjurek/"
          >Instagram</a>
        </strong>
      </p>
    </div>
    <div class="tiles">
      <artwork-tile v-for="artwork in gallery" :key="artwork.id" :artwork="artwork"></artwork-tile>
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
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
  @media screen and (max-width: $max-mobile) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
  .artwork-tile {
    &:first-child {
      //grid-column: 1 / span 2;
    }
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
