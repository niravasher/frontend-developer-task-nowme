<template>
  <div class="create-post-root">
    <div class="create-post-text">Create Post</div>
    <div class="create-post-section">
      <img src="@/assets/Message.png" alt="">
      <Input :value="newPost" @onChange="onChange" type="text" class="create-post-input" border="none" placeholder="How are you feeling today?" />
    </div>
    <div class="create-post-cta">
      <Button height="43px" width="111px" @onClick="onCreatePost">
        <div class="login-btn">Post</div>
      </Button>
    </div>
    <div v-if="showLoginPopup" class="login-popup">
      <div class="login-popup-inner">
        <Popup :showCloseBtn="true" @onClickClose="onClickClose" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import moment from 'moment'

import Input from "@/components/Input";
import Button from "@/components/Button.vue";
import Popup from "@/components/Popup.vue";

export default {
  name: "CreatePost",
  components: {
    Input,
    Button,
    Popup
  },
  data() {
    return {
      newPost: "",
      showLoginPopup: false
    }
  },
  computed: {
    ...mapState('user', { user: 'currentUser' }),
  },
  methods: {
    ...mapMutations('posts', {
      addPost: 'addPost'
    }),
    moment,
    onChange(e) {
      this.newPost = e.target.value;
    },
    onCreatePost() {
      if (!this.user) {
        this.showLoginPopup = true;
        return;
      }
      if (!this.newPost.length) return;
      let input = {
        name: this.user.firstName + " " + this.user.lastName,
        createdAt: moment().format(),
        profile_picture: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FyTVZ9sGfTrCFR4xi0gt6_Nirav.png",
        description: this.newPost,
        isEdited: false,
        icon: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FA6zeppzGTICyv12ICKfC_Hand.png",
        comments: 0
      };
      this.addPost(input);
      this.newPost = "";
    },
    onClickClose() {
      this.showLoginPopup = false;
    }
  }
}
</script>

<style>
.create-post-root {
  background: #27292D;
  border: 2px solid #35373B;
  border-radius: 8px;
  padding: 20px;
}

.create-post-text {
  text-align: left;
  padding-bottom: 20px;
}

.create-post-section {
  background: #191920;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.create-post-cta {
  text-align: right;
}

.create-post-input {
  margin-left: 16px;
  width: 100%;
}

.login-btn {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.login-popup {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.7);
  z-index: 2;
}

.login-popup-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
