<template lang="html">
  <div class="project-details">
    <div class="columns">
      <div class="column"
        v-bind:class="[layout ? 'is-one-third' : 'is-half']"
        >
        <div class="sticky">
          <a class="back-link" @click="$router.back()">&larr; <span>Back to work</span></a>
          <h3>{{title}}</h3>
          <p class="lead">{{description}}</p>
          <div class="body" v-html="$md.render(body)"/>
        </div>
      </div>
      <div class="column"
        v-bind:class="[layout ? 'is-two-thirds' : 'is-half']">
        <div class="images">
          <img v-bind:src=cover />
          <img v-for="(mockup, index) in mockups" :key="index" v-bind:src="mockup" />
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    let work = await import(`~/content/work/${params.slug}.json`);
    return {
      title: work.title,
      description: work.description,
      body: work.body,
      cover: work.cover,
      layout: work.layout,
      mockups: work.mockups
    };
  },
  transition: "fade"
}
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

.project-details {
  position: fixed;
  z-index: 500;
  background:$main-background;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.back-link {
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: $max-mobile) {
    border-radius: 999px;
    //border: 2px solid black;
    box-shadow: inset 0 0 0 2px black;
    position: fixed;
    bottom: 1em;
    left: 1em;
    width: 48px;
    height: 48px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    &:hover {
      box-shadow: inset 0 0 0 0px rgba(black, 0);
      background: white;
    }
    span {
      display: none;
    }
  }
}
.description {
  font-size: 1.5em;
  font-weight: 300;
}
.sticky-info {
  padding: 4em;
  top: 0;
}
.sticky {
  padding: 3em;
  top: 0;
}
.images {
  min-height: calc(100vh - 8em);
  background: $images-background;
  text-align: center;
  // padding: 3em;
  padding: 4em 0;
  img {
    &:last-child {
      margin-bottom: 0em;
    }
    max-width: 70%;
    margin-bottom: 4em;
  }
}
.body {
   
}
</style>
