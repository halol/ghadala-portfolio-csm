<template lang="html">
  <div class="project-details">
    <div class="columns">
      <div class="column is-half">
        <div class="sticky-info">
          <a class="back-link" @click="$router.back()">&larr; Back to work</a>
          <h2>{{title}}</h2>
          <p class="description">{{description}}</p>
          <div class="body" v-html="$md.render(body)"/>
        </div>
      </div>
      <div class="column is-half">
        <div class="images">
          <img v-bind:src=cover />

          <img v-for="(mockup, index) in mockups" :key="index" v-bind:src="mockup" />
          <!-- <img 
          v-for="mockup in mockups" 
          v-bind:key="index" 
          v-bind:src="mockup[index]" /> -->

          <!-- <img v-if="mockup1" v-bind:src=mockup1 />
          <img v-if="mockup2" v-bind:src=mockup2 />
          <img v-if="mockup3" v-bind:src=mockup3 />
          <img v-if="mockup4" v-bind:src=mockup4 />
          <img v-if="mockup5" v-bind:src=mockup5 /> -->
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
      // mockup1: work.mockup1,
      // mockup2: work.mockup2,
      // mockup3: work.mockup3,
      // mockup4: work.mockup4,
      // mockup5: work.mockup5,
      mockups: work.mockups
    };
  } 
}
</script>

<style lang="scss" scoped>
.project-details {
  position: fixed;
  z-index: 500;
  background: white;
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
}
.description {
  font-size: 1.5em;
  font-weight: 300;
}
.body {
  ul {
    //
  }
}
.sticky-info {
  padding: 4em;
  top: 0;
}
.images {
  background: #F9EFE6;
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
</style>