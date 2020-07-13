<template>
  <div>
    <h1>My blog</h1>
    <ul>
      <li v-for="post in blog" :key="post.id">
        <nuxt-link :to="'blog/' + post.uid">{{
          post.data.title[0].text
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      //const homepageContent = (await $prismic.api.getSingle('blog_home')).data
      // Query to get posts content to preview
      const query = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog")
      );
      // Returns data to be used in template
      return {
        //homepageContent,
        blog: query.results
        //image: homepageContent.image.url,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
