<template>
  <div class="project-details-parent">
    <back-button />
    <section class="section heading">
      <p>
        {{title}},
        <strong>{{year}}</strong>
      </p>
      <h1 class="project-title">{{description}}</h1>

      <div class="chips">
        <info-chip color="primary" label="E-commmm" />
        <info-chip color="default" label="Web" />
        <info-chip color="default" label="iOS" />
        <info-chip color="default" label="Android" />
      </div>

      <h2>What’s the project about</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium cupiditate voluptatibus corrupti. Eaque dignissimos pariatur, voluptates ipsam libero ducimus tempore assumenda mollitia, odit id corrupti dolorem in, incidunt natus.</p>
    </section>
    <section class="section gallery">
      <div class="items scroll">
        <figure v-for="(image, index) in images" :key="index">
          <img :src="image" alt="index" />
        </figure>
      </div>
    </section>
    <section class="section case-study"></section>
  </div>
</template>

<script>
import InfoChip from "~/components/InfoChip.vue";
import BackButton from "~/components/BackButton.vue";
import { galleryScroll } from "~/plugins/hscroll.js";

// => Import scroll.js

export default {
  layout: "custom",
  components: {
    InfoChip,
    BackButton
  },
  data() {
    return {
      images: [
        "https://res.cloudinary.com/decakckik/image/upload/v1575223607/renders/golf2_h53dlt.png",
        "https://res.cloudinary.com/decakckik/image/upload/v1575223607/renders/golf-app-02_akdn36.png",
        "https://res.cloudinary.com/decakckik/image/upload/v1575223606/renders/golf-app-01_eflt7x.png",
        "https://res.cloudinary.com/decakckik/image/upload/v1575223606/renders/golf-app-01_eflt7x.png"
      ],
      folder: "renders"
    };
  },
  async asyncData({ params, app, payload, route, store }) {
    let work = await import(`~/content/work/${params.slug}.json`);
    return {
      title: work.title,
      description: work.description,
      body: work.body,
      cover: work.cover,
      layout: work.layout,
      mockups: work.mockups,
      year: work.year
    };
  },
  mounted() {
    galleryScroll();
  }
};
</script>
<style lang="scss">
.section {
  padding: 5em 7em;
  &.gallery {
    padding: 0;
    overflow: hidden;
    min-height: calc(100vh);
    max-height: calc(100vh);
    background: t($light-theme, "mockup");
    @media (prefers-color-scheme: dark) {
      background: t($dark-theme, "mockup");
    }
  }
  &.case-study {
    // TBD
  }
}

figcaption {
  background: t($dark-theme, "bg");
  color: t($dark-theme, "text");
  border-radius: 999px;
  padding: 0 24px;
  height: 32px;
  line-height: 33px;
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 5em;
  font-size: 12px;
  font-family: $font-style-bold;
  box-shadow: 0 3px 7px rgba($black, 0.05);
}
.items {
  //padding: 5em 7em;
  //padding: 3em 0;
  display: flex;
  position: relative;
  //overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  transition: all 300ms ease;
  will-change: transform;
  user-select: none;
  cursor: pointer;
  &.active {
    cursor: grabbing;
  }
}
figure {
  padding: 5em;
  height: calc(100vh);
  img {
    max-height: 100%;
    width: auto;
  }
}

.chips {
  > * {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
.project-title {
  margin-bottom: 0.6em;
}

// SVG
</style>