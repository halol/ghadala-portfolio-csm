<template>
  <div class="artwork-details">
    <back-button parent="art"></back-button>

    <div class="artwork-main-image" :style="featuredImage">
      <img :src="mobileImage" alt="" class="mobile-image" />
    </div>
    <template v-if="gallery.length > 1">
      <div class="artwork-gallery">
        <div class="main">
          <div class="grid">
            <div
              class="item"
              v-bind:class="{ selected: currentImage(index) }"
              v-for="(item, index) in gallery"
              :key="index"
            >
              <img :src="item" alt @click.prevent="setCurrentImage(index)" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="artwork-description">
      <div class="main">
        <h1>
          {{ $prismic.asText(result.title) }}
          <span v-show="result.year">, 2020</span>
        </h1>
        <template v-if="result.medium || result.series || result.dimensions">
          <p class="artwork-meta-info">
            <span v-if="result.series"
              >Series of "{{ $prismic.asText(result.series) }}".</span
            >
            <span v-if="result.medium">{{ result.medium }}.</span>
            <span v-if="result.dimensions"
              >Dimensions:
              {{ $prismic.asText(result.dimensions) }} (W/H/D)</span
            >
          </p>
        </template>

        <p v-if="result.description">
          {{ $prismic.asText(result.description) }}
        </p>

        <div class="status">
          <p class="status-available" v-if="result.status == 'Available'">
            Available for €{{ result.price }}
          </p>
          <p class="status-reserved" v-else-if="result.status == 'Reserved'">
            Reserved
          </p>
          <p class="status-sold" v-else>Sold for €{{ result.price }}</p>
        </div>
      </div>
    </div>

    <div class="reservation-form" v-if="result.status == 'Available'">
      <div class="main">
        <h4>Reserve {{ result.title[0].text }}</h4>
        <p class="form-price">Price: €{{ result.price }}</p>
        <form action class="form" netlify>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
            class="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            class="input-field"
          />
          <input
            type="phone"
            placeholder="Phone number"
            name="phone"
            id="phone"
            class="input-field"
          />

          <textarea
            name="remarks"
            id="remarks"
            cols="30"
            rows="4"
            placeholder="Message..."
            class="input-field"
          ></textarea>
          <input type="hidden" name="painting" :value="result.title[0].text" />
          <div>
            <small
              >Currently all the pruchases are available for collection or
              delivery (by myself) in the 🇳🇱 Netherlands. For other countries
              please state shipping information and I will provide shipping
              estimates.</small
            >
          </div>
          <div><button type="submit" class="btn-submit">Reserve</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "~/components/BackButton.vue";
import MyButton from "~/components/MyButton.vue";
export default {
  // Snippets
  // result.body[0].slice_type === "gallery" CZY JEST NA SALI GALERIA
  // result.body[0].items dostęp do Galerii
  // result.body[0].items[0].gallery_photo PIERWSZA FOTKA (Obiekt)
  // result.body[0].items[0].gallery_photo.url URL fotki
  layout: "artwork",
  components: {
    BackButton,
    MyButton
  },
  data() {
    return {
      artworkData: {},
      artworkBody: {},
      selectedImage: 0,
      gallery: []
      /*result: {
        title: [
          { type: "heading1", text: "Abstract composition no. 1", spans: [] }
        ],
        series: [{ type: "paragraph", text: "Asbtracts", spans: [] }],
        artwork_cover: {
          dimensions: { width: 660, height: 473 },
          alt: null,
          copyright: null,
          url:
            "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format",
          medium: {
            dimensions: { width: 1200, height: 1200 },
            alt: null,
            copyright: null,
            url:
              "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=93,0,473,473&w=1200&h=1200"
          },
          large: {
            dimensions: { width: 1920, height: 1920 },
            alt: null,
            copyright: null,
            url:
              "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=94,0,473,473&w=1920&h=1920"
          },
          small: {
            dimensions: { width: 720, height: 720 },
            alt: null,
            copyright: null,
            url:
              "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=93,0,473,473&w=720&h=720"
          }
        },
        description: [
          { type: "paragraph", text: "Soem description goes here..", spans: [] }
        ],
        body: [
          {
            slice_type: "gallery",
            slice_label: null,
            items: [
              {
                gallery_photo: {
                  dimensions: { width: 660, height: 473 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format",
                  thumbnail: {
                    dimensions: { width: 250, height: 250 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=93,0,473,473&w=250&h=250"
                  },
                  medium: {
                    dimensions: { width: 720, height: 720 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=93,0,473,473&w=720&h=720"
                  },
                  large: {
                    dimensions: { width: 1600, height: 1600 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/e12cb9fd-2d6d-4ab5-b0d0-a2976927ce35_Screenshot+2020-06-10+at+17.29.48.png?auto=compress,format&rect=93,0,473,473&w=1600&h=1600"
                  }
                }
              },
              {
                gallery_photo: {
                  dimensions: { width: 661, height: 718 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/hadala-art/80816cbb-d35a-4fc0-80da-d4c87f1aedae_Screenshot+2020-06-10+at+17.29.59.png?auto=compress,format",
                  thumbnail: {
                    dimensions: { width: 250, height: 250 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/80816cbb-d35a-4fc0-80da-d4c87f1aedae_Screenshot+2020-06-10+at+17.29.59.png?auto=compress,format&rect=0,29,661,661&w=250&h=250"
                  },
                  medium: {
                    dimensions: { width: 720, height: 720 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/80816cbb-d35a-4fc0-80da-d4c87f1aedae_Screenshot+2020-06-10+at+17.29.59.png?auto=compress,format&rect=0,28,661,661&w=720&h=720"
                  },
                  large: {
                    dimensions: { width: 1600, height: 1600 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/80816cbb-d35a-4fc0-80da-d4c87f1aedae_Screenshot+2020-06-10+at+17.29.59.png?auto=compress,format&rect=0,29,661,661&w=1600&h=1600"
                  }
                }
              },
              {
                gallery_photo: {
                  dimensions: { width: 659, height: 730 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/hadala-art/7b7d8875-04bb-43ab-b207-93cb94ed5be4_Screenshot+2020-06-10+at+17.29.54.png?auto=compress,format",
                  thumbnail: {
                    dimensions: { width: 250, height: 250 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/7b7d8875-04bb-43ab-b207-93cb94ed5be4_Screenshot+2020-06-10+at+17.29.54.png?auto=compress,format&rect=0,34,659,659&w=250&h=250"
                  },
                  medium: {
                    dimensions: { width: 720, height: 720 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/7b7d8875-04bb-43ab-b207-93cb94ed5be4_Screenshot+2020-06-10+at+17.29.54.png?auto=compress,format&rect=0,36,659,659&w=720&h=720"
                  },
                  large: {
                    dimensions: { width: 1600, height: 1600 },
                    alt: null,
                    copyright: null,
                    url:
                      "https://images.prismic.io/hadala-art/7b7d8875-04bb-43ab-b207-93cb94ed5be4_Screenshot+2020-06-10+at+17.29.54.png?auto=compress,format&rect=0,35,659,659&w=1600&h=1600"
                  }
                }
              }
            ],
            primary: {}
          }
        ],
        status: "Available",
        price: 300,
        medium: "Acrylic",
        link: { link_type: "Any" },
        dimensions: [{ type: "paragraph", text: "50 / 60 / 3", spans: [] }]
      }*/
    };
  },
  methods: {
    currentImage: function(selectedImage) {
      return this.selectedImage == selectedImage;
    },
    setCurrentImage: function(index) {
      this.selectedImage = index;
    },
    createGallery: function() {
      let cover = this.result.artwork_cover.url;
      this.gallery.push(cover);

      if (this.result.body[0] && this.result.body[0].slice_type === "gallery") {
        let items = this.result.body[0].items;
        for (let i = 0; i < items.length; i++) {
          this.gallery.push(items[i].gallery_photo.url);
        }
      }
    }
  },
  computed: {
    featuredImage: function() {
      return `background-image: url(${this.gallery[this.selectedImage]};`;
    },
    mobileImage: function() {
      return this.gallery[this.selectedImage];
    }
  },
  mounted() {
    this.createGallery();
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const result = (await $prismic.api.getByUID("art", params.uid)).data;
      // Returns data to be used in template
      return {
        result: result
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss">
.artwork-main-image {
  height: 60vh;
  background-color: $light;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  .mobile-image {
    display: none;
  }
  @media screen and (max-width: $max-mobile) {
    background-image: none;
    height: auto;
    .mobile-image {
      display: block;
    }
  }
}
.status {
  font-size: 1.5em;
}
.status-available {
  color: $primary;
}
.status-reserved {
  color: $secondary;
}
.status-sold {
  color: $medium;
}
.artwork-gallery {
  + .artwork-description {
    > .main {
      padding-top: 0;
    }
  }
}
.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: $max-mobile) {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: 64px;
    }
  }
  //grid-auto-rows: 120px;
  .item {
    //overflow: hidden;
    height: inherit;
    will-change: contents;
    transition: all 300ms ease;
    &.selected {
      opacity: 0.5;
    }
    &:hover {
      transform: scale(1.05);
    }
    img {
      object-fit: cover;
      height: 140px;
      width: 100%;
    }
  }
}
.reservation-form {
  background: $black;
  color: white;
}
.input-field {
  width: 100%;
  display: flex;
  background: transparent;
  padding: 12px 0;
  //box-shadow: inset 0 -2px $medium;
  border-bottom: 2px solid $medium;

  &:focus {
    outline: none;
    border-bottom: 2px solid $primary;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px $black inset;
  }
}
.btn-submit {
  margin-top: 16px;
  border: 2px solid $light;
  color: $light;
  padding: 8px 16px;
}
.form-price {
  color: $light;
}
.artwork-meta-info {
  color: $medium;
}
</style>
