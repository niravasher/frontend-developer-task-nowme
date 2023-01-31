<template>
  <LoginSignupModal
    header="WELCOME BACK"
    title="Log into your account"
    class="login-page-component"
    :showCloseBtn="showCloseBtn"
    @onClickClose="$emit('onClickClose')"
  >
    <Input
      placeholder="Enter your email or username"
      label="Email or Username"
      class="login-email"
    />
    <Input
      type="password"
      placeholder="Enter your password"
      label="Password"
      :showForgotPassword="true"
    />
    <Button height="43px" width="100%" @onClick="onClickLogin">
      <div class="login-btn">Login Now</div>
    </Button>
    <div class="not-registered">
      Not registered yet? <span class="register-link" @click="onClickGoToRegister">Register →</span>
    </div>
  </LoginSignupModal>
</template>

<script>
import { mapMutations } from 'vuex';

import LoginSignupModal from "@/components/LoginSignupModal.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Popup",
  components: {
    LoginSignupModal,
    Input,
    Button,
  },
  props: {
    showCloseBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations('user', {
      addUser: 'addUser'
    }),
    onClickLogin() {
      let input = {
        firstName: "Nirav",
        lastName: "Asher",
        age: 24,
        profile_picture: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FyTVZ9sGfTrCFR4xi0gt6_Nirav.png"
      }
      this.addUser(input);
      this.$emit("onClickClose");
      if (this.$router.currentRoute.fullPath != '/') this.$router.push('/')
    },
    onClickGoToRegister() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style>
.login-page-component {
  width: 463px;
}

.login-btn {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.login-email {
  padding-bottom: 15px;
}

.not-registered {
  text-align: left;
  color: #7F8084;
  font-size: 14px;
  padding-top: 15px;
}

.register-link {
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .login-page-component {
    width: 300px;
  }
}
@media screen and (max-width: 330px) {
  .login-page-component {
    width: 250px;
  }
}
</style>