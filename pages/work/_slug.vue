<template lang="html">
  <div class="work-details">
    <div class="description">
          <a class="back-link" @click="$router.back()"><img class="back-arrow" src="~/static/back-arrow.svg"> <span>Back to work</span></a>
          <h3>{{description}}</h3>
          <p class="title">{{title}}</p>
          <p class="year">{{year}}</p>
          <div class="body" v-html="$md.render(body)"/>
    </div>
    <div class="mockups">
          <show-image :image="cover" height="800" :folder="folder" :title="title"></show-image>
          <show-image 
          v-for="(mockup, index) in mockups" :key="index"
          :image="mockup" height="800" :folder="folder" :title="title"></show-image>
    </div>
  </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";

export default {
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
  //transition: "fade",
  components: {
    ShowImage
  },
  data: function() {
    return {
      folder: "renders"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

$padding: 3em;

.work-details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "description mockups";
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    position: absolute;
    .mockups {
      height: auto;
    }
  }
}
.year {
    font-family: $bold-font;
    color: $grey;
}
.description { 
  grid-area: description;
  padding: $padding;  
}
.back-link {
  font-family: $bold-font;
  height: 24px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  span {
    margin-top: 2px;
    //margin-left: 4px;
  }
  .back-arrow {
    stroke: $blue;
    display: none;
  }
  &:hover {
    cursor: pointer;
   
  }
}

.mockups { 
  grid-area: mockups; 
  overflow-y: auto; 
  background: $light-gray;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 600px;
  grid-gap: 2em;
  padding: $padding;
}
</style>
