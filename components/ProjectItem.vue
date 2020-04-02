<template>
  <div class="work-item">
    <div class="description">
      <p class="short">{{work.title}}</p>
      <nuxt-link :to="work._path">
        <h4>{{work.description}}</h4>
      </nuxt-link>
      <p class="year">{{work.year}}</p>
    </div>
    <div class="mockup">
      <nuxt-link :to="work._path" class="image-link">
        <show-image :image="work.cover" height="800" :folder="folder" :title="work.title"></show-image>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
export default {
  props: ["work"],
  components: {
    ShowImage
  },
  data: function() {
    return {
      folder: "renders"
    };
  },
  beforeMount() {
    console.log(this.work);
  }
};
</script>


<style lang="scss" scoped>
.work-item {
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 6em;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    .description,
    .mockup {
      width: 100%;
    }
    .description {
      @media (prefers-color-scheme: dark) {
        background: transparent;
      }
      padding-bottom: 1.5em;
    }
    .image-link {
      padding: 0;
      .image {
        background-size: cover;
        background-position: 0% 0%;
      }
    }
    .mockup {
      justify-content: flex-start;
      padding-bottom: 2em;
      height: auto;
      transform: scale(1);
    }
    &:not(:last-child) {
      margin-bottom: 12vw;
    }
  }
}

.description {
  grid-area: description;
  width: 40%;
  margin-right: 4%;
  h4 {
    margin-top: 0;
  }
  p {
    margin-bottom: 12px;
  }
}

.mockup {
  grid-area: mockup;
  width: 56%;
  display: flex;
  align-content: center;
  text-align: center;
  justify-content: center;
  background: t($light-theme, "mockup");
}
.image-link {
  width: 100%;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  //overflow: hidden;
  padding: 2em;
  .image {
    transform: scale(1.025);
  }
  &:hover {
    .image {
      transform: scale(1.1);
    }
  }
}

.year {
  font-family: $font-style-bold;
  color: t($light-theme, "year");
}

@media (prefers-color-scheme: dark) {
  .year {
    color: t($dark-theme, "medium");
  }
  .mockup {
    background: transparent;
  }
}
</style>