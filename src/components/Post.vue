<template>
  <div class="single-post-root">
    <div class="single-post-nav">
      <div class="single-post-header">
        <img v-if="post.profile_picture" :src="post.profile_picture" alt="">
        <div class="single-post-user">
          <div class="single-post-name">{{ post.name }}</div>
          <div class="single-post-time">{{ moment(post.createdAt).format('DD MMM YYYY, h:mm:ss a') }} {{ post.isEdited ? "• Edited" : "" }}</div>
        </div>
      </div>
      <img src="@/assets/dots.svg" alt="">
    </div>
    <div class="single-post-description">
      <img :src="post.icon" alt="">
      <div class="single-post-text">{{ post.description }}</div>
    </div>
    <div v-if="post.comments" class="single-post-comments">
      <img class="single-post-commImg" src="@/assets/comments.svg" alt="">
      {{ post.comments }} comments
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    moment
  }
}
</script>

<style>
.single-post-root {
  background: #27292D;
  border: 2px solid #35373B;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
}

.single-post-nav {
  display: flex;
  justify-content: space-between;
}

.single-post-header {
  text-align: left;
  display: flex;
  align-items: center;
}

.single-post-user {
  padding-left: 16px;
}

.single-post-name {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  color: #c5c7ca;
}

.single-post-time {
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: #7f8084;
  padding-top: 4px;
}

.single-post-description {
  background: #191920;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  text-align: left;
}

.single-post-text {
  margin-left: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #7F8084;
}

.single-post-commImg {
  margin-right: 5px;
}

.single-post-comments {
  font-weight: 500;
  font-size: 14px;
  color: #7F8084;
  display: flex;
  margin-top: 14px;
}
</style>
