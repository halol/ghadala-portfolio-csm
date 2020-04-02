<template>
  <div class="image" :style="parseStyle"></div>
</template>

<script>
import cloudinary from "cloudinary-core";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "decakckik" });

export default {
  props: {
    image: {
      type: String
    },
    height: String,
    folder: String,
    title: String
  },
  data: function() {
    return {
      sizes: [480, 960, 1280],
      urls: []
    };
  },
  computed: {
    parseStyle: function() {
      let path = this.folder + "/" + this.image;
      let cloud = cloudinaryCore.url(path, {
        height: this.parseHeight,
        crop: "scale"
      });
      return "background-image: url(" + cloud + ");";
    },
    getTitle: function() {
      return this.title;
    },
    parseHeight: function(height) {
      return parseInt(this.height, 10);
    },
    getImage: function() {
      let path = this.folder + "/" + this.image;
      return cloudinaryCore.url(path, {
        height: this.parseHeight,
        crop: "scale"
      });
    }
  }
};
</script>

<style lang="scss">
.image {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: inherit;
  width: 100%;
  transition: all 0.25s ease;
}
</style>