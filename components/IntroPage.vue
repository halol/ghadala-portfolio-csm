<template>
  <div class="intro-page">
    <p class="category">Worked with</p>

    <div class="companies">
      <div class="roles" v-for="(item, index) in parseWorked" :key="index">
        <div class="header">
          <small class="label">{{ item.city[0] }}</small>
        </div>
        <div class="jobs">
          <div v-for="(role, index) in item.city[1]" :key="index" class="role">
            <div class="role--company">
              <strong>{{ role.company }}</strong>
            </div>
            <div class="role--role">
              <small>{{ role.role }}</small>
            </div>
            <div>
              <span class="label" v-if="role.current">Current</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demo from "~/demo/worked.json";
import _ from "lodash";
export default {
  computed: {
    introPage() {
      return this.$store.state.introPage;
    }
  },
  data() {
    return {
      worked: demo
    };
  },
  computed: {
    parseWorked() {
      let grouped = _.chain(this.worked)
        .groupBy("city")
        .toPairs()
        .map(value => ({ city: value }))
        .value();
      return grouped;
    }
  },
  beforeMount() {
    console.log(this.parseWorked[0]);
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
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  grid-template-rows: repeat(2, auto-fit);
  grid-gap: 2em;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}
.header small {
  color: $medium;
}
.label {
  color: $secondary;
  margin-right: 8px;
  font-size: 0.65em;
  //line-height: 0.75em;
  text-transform: uppercase;
  border-radius: 0.25em;
  font-family: $font-style-bold;
  margin-bottom: 12px;
}
.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  grid-template-rows: repeat(2, auto-fit);
  grid-row-gap: 24px;
  @media screen and (max-width: 460px) {
    display: block;
    .role {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
}
.dot {
  background: $medium;
  color: $white;
  font-family: $font-style-bold;
  font-size: 8px;
  border-radius: 999px;
  text-align: center;
  width: 24px;
  height: 24px;
  text-align: center;
  //line-height: 27px;
}
.role--projects small {
  color: $medium;
}
.role--company {
  display: flex;
  align-items: center;
  margin-bottom: -4px;
  > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
