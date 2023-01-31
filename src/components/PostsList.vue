<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Post from "@/components/Post.vue"

export default {
  name: "PostsList",
  components: {
    Post
  },
  computed: {
    ...mapState('posts', { posts: 'posts' }),
  }
}
</script>

<style></style>