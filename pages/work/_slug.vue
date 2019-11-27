<template lang="html">
  <div class="project">
    <h1 class="title">{{title}}</h1>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    /*
    Interestingly, if you just return the raw project object as it is imported,
    Nuxt fails to build, but if you create your own object with the data you
    need, it works. The issue is discussed here, but apparently it wasn't
    completely fixed. https://github.com/nuxt-community/apollo-module/issues/163
    However, I like the code more this way anyway--it's more explicit what
    you're bringing in from the JSON.
    */
    let project = await import(`~/content/work/${params.slug}.json`);
    return {
      body: project.description,
      title: project.project_title,
      //author: project.author,
    };
  }
}
</script>

<style lang="css" scoped>
.back, .date, .body {
  padding-top: 10px;
}
.back-link {
  text-decoration: underline;
  color: #3b8070;
  cursor: pointer;
}

.date {
  color: darkgray;
}
.project {
  background-color: whitesmoke;
  padding: 20px;
}
</style>
