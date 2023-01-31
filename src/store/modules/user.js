const state = {
  currentUser: null
};
const getters = {};
const mutations = {
  addUser(state, user) {
    state.currentUser = user;
  }
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
