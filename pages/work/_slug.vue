<template>
  <div class="project-details-parent">
    <back-button parent="work" />
    <section class="section heading">
      <p>
        {{title}},
        <strong>{{year}}</strong>
      </p>
      <h1 class="project-title">{{description}}</h1>

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
    <section class="section gallery" v-if="images">
      <div class="items scroll">
        <figure class="figure" v-for="(image, index) in mockups" :key="index">
          <img :src="parseImage(image)" alt="index" />
        </figure>
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
.section {
  padding: 5em 7em;
  @media screen and (max-width: $max-mobile) {
    padding: 48px 48px;
  }
  &.gallery {
    padding: 0;
    overflow: hidden;
    width: 100%; //OK
    height: 100vh; //OK
    background: t($light-theme, "mockup");
    @media screen and (max-width: $max-mobile) {
      padding: 0;
    }
    @media (prefers-color-scheme: dark) {
      background: t($dark-theme, "mockup");
    }
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

.figcaption {
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
  cursor: move;
  &.active {
    cursor: grabbing;
    transform: scale(1.025);
  }
}
.figure {
  padding: 6em 7em;
  height: 100vh;
  @media screen and (max-width: $max-mobile) {
    padding: 48px 48px;
  }
  img {
    max-height: 100%;
    width: auto;
    //max-width: calc(100vw - 96px);
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

// SVG
</style>