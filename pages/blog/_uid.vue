<template>
  <div class="blog-post">
    <section class="blog-post-cover" :style="postCover" v-if="post.cover.url">
      <div class="main d-flex">
        <div class="flex-column">
          <prismic-rich-text :field="post.title" class="emphasize" />
          <small class="emphasize">{{ setTime }}</small>
        </div>
      </div>
    </section>
    <div class="main" v-else>
      <prismic-rich-text :field="post.title" />
    </div>
    <div class="main">
      <p class="lead">{{ post.blurb[0].text }}</p>
      <article v-for="slice in post.body" :key="slice">
        <template v-if="slice.slice_type == 'paragraph'">
          <p
            v-for="(paragraph, index) in slice.primary.paragraph"
            :key="'paragraph-' + index"
          >
            {{ paragraph.text }}
          </p>
        </template>
        <template v-if="slice.slice_type == 'quote'">
          <blockquote>
            <p>{{ $prismic.asText(slice.primary.some_quote) }}</p>

            <span>- {{ $prismic.asText(slice.primary.author) }}</span>

            <img
              :src="slice.primary.avatar.url"
              alt=""
              height="48"
              width="48"
            />
          </blockquote>
        </template>
      </article>

      <pre>{{ post }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  layout: "post",
  computed: {
    postCover: function() {
      return `background-image: url(${this.post.cover.url});`;
    },
    setTime: function() {
      let timestamp = this.post.timestamp;

      let date = new Date(timestamp);

      return (
        date.getUTCFullYear() +
        "-" +
        date.getUTCMonth() +
        "-" +
        date.getUTCDay()
      );
    }
  },
  data() {
    return {
      post: {
        timestamp: "2020-07-10T22:00:00+0000",
        title: [
          {
            type: "heading1",
            text: "My Second Blog post",
            spans: []
          }
        ],
        blurb: [
          {
            type: "paragraph",
            text:
              "Sed convallis, nisi laoreet ullamcorper vehicula, mi ligula tempus nibh, id fermentum lectus orci sed ipsum. Phasellus id cursus nisi. Sed facilisis erat ac semper tincidunt.",
            spans: []
          }
        ],
        cover: {
          dimensions: {
            width: 796,
            height: 552
          },
          alt: "Here's the image",
          copyright: null,
          url:
            "https://images.prismic.io/hadala-art/0d26df9e-4e70-4175-ae98-41ae5eef8afb_Screenshot+2020-06-10+at+12.05.17.png?auto=compress,format"
        },
        body: [
          {
            slice_type: "paragraph",
            slice_label: null,
            items: [{}],
            primary: {
              paragraph: [
                {
                  type: "paragraph",
                  text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae magna vehicula, molestie eros sit amet, pharetra libero. Donec consectetur vitae diam quis ultrices. Cras mattis, arcu sit amet dictum tincidunt, quam magna varius est, a faucibus mauris arcu ac sem. Sed vel quam massa. Curabitur porttitor, lacus vitae commodo sodales, nisi orci pharetra leo, nec condimentum purus magna id magna. Donec rhoncus, elit et imperdiet semper, nisl purus accumsan metus, sit amet pellentesque lacus lectus nec diam. Nulla accumsan ligula sit amet lacus vehicula aliquam. Aenean tristique ex sit amet lacus ornare maximus. Nunc molestie et sem sed varius. Phasellus vulputate nec risus non consectetur. Duis tincidunt ex vitae ipsum congue, eu tempus magna aliquam. Vivamus nec commodo odio. Curabitur laoreet euismod erat, sed vulputate libero vestibulum a. Donec aliquam sed nunc quis hendrerit. Suspendisse id risus dictum, pretium velit in, imperdiet erat.",
                  spans: []
                },
                {
                  type: "paragraph",
                  text:
                    "Nunc molestie et sem sed varius. Phasellus vulputate nec risus non consectetur. Duis tincidunt ex vitae ipsum congue, eu tempus magna aliquam. Vivamus nec commodo odio. Curabitur laoreet euismod erat, sed vulputate libero vestibulum a. Donec aliquam sed nunc quis hendrerit. Suspendisse id risus dictum, pretium velit in, imperdiet erat.",
                  spans: []
                }
              ]
            }
          },
          {
            slice_type: "quote",
            slice_label: null,
            items: [{}],
            primary: {
              some_quote: [
                {
                  type: "paragraph",
                  text: "This is a massive quote written by someone",
                  spans: []
                }
              ],
              author: [
                {
                  type: "heading1",
                  text: "Grzegorz Hadala",
                  spans: []
                }
              ],
              avatar: {
                dimensions: {
                  width: 300,
                  height: 300
                },
                alt: null,
                copyright: null,
                url:
                  "https://images.prismic.io/hadala-art/92d5545c-dfb5-42e9-8616-d2cf9e222982_Screenshot+2020-06-10+at+12.04.46.png?auto=compress,format&rect=0,177,815,815&w=300&h=300"
              }
            }
          }
        ]
      }
    };
  }
  // async asyncData({ $prismic, params, error }) {
  //   try {
  //     // Query to get post content
  //     const query = (await $prismic.api.getByUID("blog", params.uid)).data;
  //     // Returns data to be used in template
  //     return {
  //       post: query
  //     };
  //   } catch (e) {
  //     // Returns error page
  //     error({ statusCode: 404, message: "Page not found" });
  //   }
  // }
};
</script>

<style lang="scss">
.blog-post-cover {
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: $light;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.d-flex {
  height: 100%;
  display: flex;
  align-items: flex-end;
}
.emphasize {
  padding: 16px;
  h1 {
    margin: 0;
  }
  display: inline-block;
  background: $black;
  color: $white;
}
</style>
