const state = {
  posts: [
    {
      name: "Theresa Webb",
      createdAt: "2023-01-31T13:28:06+05:30",
      profile_picture:
        "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2F210XOoASu21xlfnl5fOA_Ellipse%202.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      isEdited: false,
      icon: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FA6zeppzGTICyv12ICKfC_Hand.png",
      comments: 24,
    },
    {
      name: "Marvin McKinney",
      createdAt: "2023-01-30T13:28:06+05:30",
      profile_picture:
        "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FSRitd3lsRsiIwKWKT314_Marvin.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      isEdited: true,
      icon: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2F3ZqHw1r5RWuRfEWyy1NC_Emoji.png",
      comments: 12,
    },
  ],
};
const getters = {};
const mutations = {
  addPost(state, post) {
    state.posts = [post, ...state.posts];
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
