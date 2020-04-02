<template>
  <div class="container">
    <h1>Art</h1>
    <p
      class="limit"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla numquam totam, repudiandae animi ea iure amet ab praesentium voluptatum exercitationem sunt, modi, maxime a quod eaque adipisci ut similique iste!</p>
    <div class="grid">
      <art-tile
        v-for="(art, index) in arts"
        :key="index"
        :art="art"
        :open="false"
        :index="index + 1"
        :class="{ featured: index == 0 }"
      />
      <!-- <img :src="art" alt="Artwork" /> -->
    </div>
  </div>
</template>

<script>
import ArtTile from "~/components/ArtTile.vue";

export default {
  layout: "art",
  computed: {
    getArt() {
      return this.$store.state.allArt;
    },
    createLayout() {
      let artworks = this.$store.state.allArt.length;
    }
  },
  components: {
    ArtTile
  },
  data() {
    return {
      arts: [
        {
          title: "Some title 1",
          layout: "square",
          year: "2019",
          media: "Acrylic",
          purchase: "https://www.example.com",
          price: 192.0,
          url:
            "https://images.unsplash.com/photo-1584499875098-988f27a5a75b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          title: "Some title 1",
          layout: "square",
          year: "2019",
          media: "Acrylic",
          purchase: "https://www.example.com",
          price: 1925.0,
          url:
            "https://images.unsplash.com/photo-1585354914593-cef5e545f836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
        },
        {
          title: "Some title 1",
          layout: "square",
          year: "2019",
          media: "Acrylic",
          url:
            "https://images.unsplash.com/photo-1585365341416-307e4fa22402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
          title: "Some title 1",
          layout: "square",
          year: "2019",
          media: "Acrylic",
          purchase: "https://www.example.com",
          price: 192.0,
          url:
            "https://images.unsplash.com/photo-1585369954125-4e4357eb7bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
        },
        {
          title: "Some title 1",
          layout: "square",
          year: "2019",
          media: "Acrylic",
          purchase: "https://www.example.com",
          price: 192.0,
          url:
            "https://images.unsplash.com/photo-1585396405027-9ac9e836e216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.limit {
  max-width: 60ch;
}
@media screen and (min-width: 600px) {
  .grid {
    //outline: 1px solid red;
    display: grid;
    gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4), 1fr));
    grid-auto-rows: auto-fit;
  }
}
</style>