import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import posts from "./modules/posts.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    posts
  },
});
