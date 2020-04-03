<template>
  <div class="remote-ready">
    <h2>Remote ready.</h2>
    <div class="grid">
      <div class="remote-ready--item" v-for="(phaze, index) in phazes" :key="index">
        <h4>{{phaze.name}}</h4>
        <div class="apps">
          <div
            class="app-icon"
            :title="capitalize(app)"
            v-for="(app, index) in phaze.apps"
            :key="index"
          >
            <img :src="getIcon(app)" :alt="capitalize(app)" />
          </div>
        </div>
        <p>{{phaze.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      phazes: [
        {
          name: "Product planning",
          description:
            " This white-label solution drives thousands of online shops around the world.",
          apps: ["airtable", "trello", "slack", "zoom"]
        },
        {
          name: "Design and prototyping",
          description:
            "My adventure with Kite.ly started in 2017. For almost a year I heave helped to create the best experience for personalising merchandise on the market. This white-label solution drives thousands of online shops around the world.",
          apps: ["figma", "sketch", "invision", "affinity"]
        },
        {
          name: "Building",
          description:
            "My adventure with Kite.ly started in 2017. For almost a year I heave helped to create the best experience for personalising merchandise on the market. This white-label solution drives thousands of online shops around the world.",
          apps: [
            "nuxt-dot-js",
            "vue-dot-js",
            "netlify",
            "git",
            "sass",
            "storybook"
          ]
        },
        {
          name: "Testing",
          description:
            "My adventure with Kite.ly started in 2017. For almost a year I heave helped to create the best experience for personalising merchandise on the market. This white-label solution drives thousands of online shops around the world.",
          apps: ["googleanalytics", "invision", "figma"]
        }
      ]
    };
  },
  methods: {
    // Some methods
    getIcon: function(icon) {
      return require(`~/static/apps/${icon}.svg`);
      //return require("html!")
    },
    capitalize: function(string) {
      return _.capitalize(_.replace(string, "-dot-", " "));
    },
    sanitize: function(string) {
      let removeDot = _.replace(string, "-dot-", " ");
      return _.capitalize(removeDot);
    }
  },
  computed: {
    // Generate stuff
  }
};
</script>
<style lang="scss">
$icon-size: 18px;
.grid {
  @media screen and (min-width: $max-mobile) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 240px;
    grid-gap: 5em;
  }
}
.apps {
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 24px;
  // border-radius: 999px;
  // padding: 8px 16px;
  // background: t($light-theme, "chip-default");
  .app-icon {
    height: $icon-size;
    height: $icon-size;
    position: relative;
    display: inline-flex;
    opacity: 1;
    transition: all 300ms ease;
    > img {
      width: $icon-size;
      height: $icon-size;
      vertical-align: middle;
    }
    &:not(:last-child) {
      margin-right: 32px;
    }
    &:hover {
      //opacity: 1;
      &:after {
        //opacity: 1;
        bottom: -180%;
      }
    }
    &:after {
      transition: all 300ms ease;
      content: attr(title);
      display: none;
      opacity: 0;
      padding: 0px 12px;
      border-radius: 999px;
      background: red;
      position: absolute;
      word-wrap: no-wrap;
      font-size: 0.6em;
      font-family: $font-style-bold;
      background: t($light-theme, "text");
      color: t($light-theme, "bg");
      bottom: -200%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>