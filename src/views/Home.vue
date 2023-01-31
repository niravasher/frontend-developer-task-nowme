<template>
  <div class="post-root">
    <div class="post-name">Hello {{ userName }}</div>
    <div class="post-description">
      How are you doing today? Would you like to share something with the
      community 🤗
    </div>
    <CreatePost />
    <PostsList />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CreatePost from "@/components/CreatePost";
import PostsList from "@/components/PostsList";

export default {
  name: "Home",
  components: {
    CreatePost,
    PostsList,
  },
  computed: {
    ...mapState("user", { user: "currentUser" }),
    userName() {
      return this.user ? this.user.firstName : "Jane";
    },
  },
};
</script>

<style>
.post-root {
  width: 50%;
  margin: auto;
  padding-bottom: 50px;
}

.post-name {
  font-weight: 500;
  font-size: 28px;
  color: #c5c7ca;
  text-align: left;
  padding-top: 70px;
}

.post-description {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 50px;
}

@media screen and (max-width: 700px) {
  .post-root {
    width: 90%;
    margin: auto;
  }
}
</style>
