<template>
  <div class="intro-page">
    <!-- <p class="motto">{{introPage.headline}}</p> -->
    <!-- <div class="body" v-html="$md.render(introPage.body)"></div> -->

    <p class="category">Worked with</p>
    <div class="companies">
      <ul class="roles">
        <li class="header">
          <small>Amsterdam</small>
        </li>
        <li>
          <strong>Adyen</strong> / Product Designer
          <span class="label">Current</span>
        </li>
        <li>
          <strong>Amsterdam UX</strong> / Meetup organizer
          <span class="label">Current</span>
        </li>
      </ul>
      <ul class="roles">
        <li class="header">
          <small>Chicago</small>
        </li>
        <li>
          <strong>TBD</strong> / Head of Product
        </li>
      </ul>
      <ul class="roles">
        <li class="header">
          <small>London</small>
        </li>
        <li>
          <strong>Kite.ly</strong> / Senior Designer
        </li>
        <li>
          <strong>ucreate.it</strong> / UX&amp;UI Designer
        </li>
      </ul>
      <ul class="roles">
        <li class="header">
          <small>Warsaw</small>
        </li>
        <li>
          <strong>PayU</strong> / Mobile UX&amp;UI Designer
        </li>
        <li>
          <strong>ASUS</strong> / Visual Designer
        </li>
        <li>
          <strong>Cisco</strong> / Visual Designer
        </li>
        <li>
          <strong>Orsay</strong> / Visual Designer
        </li>
        <li>
          <strong>PepsiCo</strong> / Visual Designer
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    introPage() {
      return this.$store.state.introPage;
    }
  }
};
</script>

<style lang="scss">
.intro-page {
  margin-top: 6em;
}
.motto {
  font-family: $font-style-light;
  font-size: 3em;
}
.roles {
  //column-count: 2;
  //column-gap: 2em;
  list-style: none;
  margin: 0;
  li {
    //vertical-align: middle;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
.companies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto-fit);
  grid-gap: 2em;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}
li.header small {
  color: t($light-theme, "muted");
  font-family: $font-style-bold;
  @media (prefers-color-scheme: dark) {
    color: t($dark-theme, "muted");
  }
}
.label {
  color: t($light-theme, "label");
  margin-right: 8px;
  font-size: 0.75em;
  line-height: 0.75em;
  text-transform: uppercase;
  border-radius: 0.25em;
  font-family: $font-style-bold;
}
</style>