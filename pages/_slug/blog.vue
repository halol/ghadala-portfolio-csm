<template lang="html">
  <div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    let post = await import(`~/content/blog/${params.slug}.json`);
    return {
      date: post.date,
      body: post.body,
      title: post.title,
      author: post.author,
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
.post {
  background-color: whitesmoke;
  padding: 20px;
}
</style>
