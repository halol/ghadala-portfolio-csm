import Vue from 'vue'
import Vuex from 'vuex'  

Vue.use(Vuex)

export const state = () => ({
  // blogPosts: [],
  // allPages: [],
  siteInfo: [],
  allArt: [],
  allWork: [],
  aboutPage: [],
  introPage: [],
  // TODO INDEX
});

export const mutations = {
  // SET_POSTS(state, data) {
  //   state.blogPosts = data
  // },
  // SET_PAGES(state, data) {
  //   state.allPages = data
  // },
  SET_INFO(state, data) {
    state.siteInfo = data
  },
  SET_ART(state, data) {
    state.allArt = data
  },
  SET_WORK(state, data) {
    state.allWork = data
  },
  SET_ABOUT(state, data) {
    state.aboutPage = data
  },
  SET_INTRO(state, data) {
    state.introPage = data
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
    //await dispatch('getBlogPosts')
    //await dispatch('getPages')
    await dispatch('getArt')
    await dispatch('getWork')
    await dispatch('getAboutPage')
    await dispatch('getIntroPage')
  },
  async getWork({ state, commit }) {
    const context = await require.context('~/content/work/', false, /\.json$/);

    const work = await context.keys().map(key => ({
      ...context(key),
      _path: `/work/${key.replace('.json', '').replace('./', '')}`
    }));

    commit('SET_WORK', work)
  },
  async getArt({ state, commit }) {
    const context = await require.context('~/content/art/', false, /\.json$/);

    const art = await context.keys().map(key => ({
      ...context(key),
      _path: `/art/${key.replace('.json', '').replace('./', '')}`  
    }));
    commit('SET_ART', art)
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  },
  getAboutPage({ state, commit }) {
    const about = require('~/content/setup/about.json');
    commit('SET_ABOUT', about)
  },
  getIntroPage({ state, commit }) {
    const intro = require('~/content/setup/start.json');
    commit('SET_INTRO', intro)
  }
};
