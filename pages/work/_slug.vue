<template>
  <div class="project-details-parent">
    <back-button parent="work" />
    <section class="section heading">
      <p>
        {{ title }},
        <strong>{{ year }}</strong>
      </p>
      <h1 class="project-title">{{ description }}</h1>
      <div class="chips" v-show="false">
        <info-chip color="primary" label="E-commmm" />
        <info-chip color="default" label="Web" />
        <info-chip color="default" label="iOS" />
        <info-chip color="default" label="Android" />
      </div>
      <div class="summary">
        <h2 v-show="false">What’s the project about</h2>
        <div class="markdown" v-html="$md.render(body)"></div>
        <p>
          <small>Content for this project is being written 🐌</small>
        </p>
      </div>
    </section>
    <section class="gallery" v-if="images">
      <div class="gallery-items scroll">
        <div
          class="gallery-item"
          v-for="(image, index) in mockups"
          :key="index"
        >
          <img
            :src="parseImage(image)"
            alt="index"
            class="gallery-item-image"
            height="600"
          />
        </div>
      </div>
    </section>
    <section class="section case-study" v-if="demo" v-show="false">
      <div class="body">
        <div class="markdown" v-html="$md.render(demo)"></div>
      </div>
    </section>
  </div>
</template>

<script>
import InfoChip from "~/components/InfoChip.vue";
import BackButton from "~/components/BackButton.vue";
import { galleryScroll } from "~/plugins/hscroll.js";
import demo from "~/static/demo.md";

import cloudinary from "cloudinary-core";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "decakckik" });

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
      folder: "renders",
      demo: demo
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
  },
  methods: {
    parseImage(filename) {
      let path = `renders/${filename}`;
      let url = cloudinaryCore.url(path, {
        height: 800,
        crop: "scale",
        secure: true
      });
      return url;
    }
  }
};
</script>
<style lang="scss">
.gallery {
  min-width: 100%;
  height: 69vh;
  overflow: hidden;
  background: t($light-theme, "mockup");
  // height: 90vh;
  @media screen and (max-width: $max-mobile) {
  }
  @media (prefers-color-scheme: dark) {
    background: t($dark-theme, "mockup");
  }
}

.gallery-items {
  // SCROLL
  height: calc(100% + 32px); // to hide the scrollbar
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  transition: all 300ms ease;
  will-change: transform;
  padding: 0 7em;
  &.active {
    cursor: grabbing;
    transform: scale(1.025);
  }
}
.gallery-item {
  transition: all 300ms ease;
  will-change: transform;
  display: inline-block;
  padding: 5em 0;
  height: 100%;
  // margin: 5em 7em;
  &:not(:last-child) {
    margin-right: 7em;
  }
  vertical-align: middle;
}
.gallery-item-image {
  height: 100%;
  display: block;
}

@media screen and (max-width: $max-mobile) {
  .gallery {
    height: 80vh;
  }
  .gallery-items {
    padding: 0 48px;
    display: flex;
    flex-wrap: nowrap;
  }
  .gallery-item {
    &:not(:last-child) {
      margin-right: 48px;
    }
    width: auto;
    //display: flex;
  }
  .gallery-item-image {
    height: 100%;
    width: auto;
  }
}

.section {
  padding: 5em 7em;
  @media screen and (max-width: $max-mobile) {
    padding: 48px 48px;
  }
}

.body,
.summary {
  max-width: 70ch;
  margin: 0 auto auto 0;
}
.summary {
  margin-left: 0;
  margin-right: auto;
}

.markdown {
  pre {
    padding: 16px;
    background: $light;
    border-radius: 8px;
    margin-bottom: 16px;
  }
}

.chips {
  &::selection {
    background: transparent;
  }
  > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
.project-title {
  margin-bottom: 0.6em;
}
</style>
