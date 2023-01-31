<template>
  <div class="login-root">
    <img class="login-logo" src="@/assets/Logo.png" alt="" />
    <LoginSignupModal
      header="SIGN UP"
      title="Create an account to continue"
      class="login-page-component"
    >
      <Input
        placeholder="Enter your email"
        label="Email"
        class="login-email"
      />
      <Input
        type="text"
        placeholder="Choose a preferred username"
        label="Username"
        class="login-username"
      />
      <Input
        type="password"
        placeholder="Choose a strong password"
        label="Password"
      />
      <Button height="43px" width="100%" @onClick="onClickRegister">
        <div class="login-btn">Continue</div>
      </Button>
      <div class="not-registered">
        Already have an account? <span class="register-link" @click="onClickGoToLogin">Login →</span>
      </div>
    </LoginSignupModal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import LoginSignupModal from "@/components/LoginSignupModal.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Login",
  components: {
    LoginSignupModal,
    Input,
    Button,
  },
  methods: {
    ...mapMutations('user', {
      addUser: 'addUser'
    }),
    onClickGoToLogin() {
      this.$router.push('/login');
    },
    onClickRegister() {
      let input = {
        firstName: "Nirav",
        lastName: "Asher",
        age: 24,
        profile_picture: "https://d6d4ismr40iw.cloudfront.net/event%2F3ccaee70-0998-4416-a810-56c6cb2b49bb%2Fresources%2FyTVZ9sGfTrCFR4xi0gt6_Nirav.png"
      }
      this.addUser(input);
      this.$router.push('/')
    },
  }
};
</script>

<style>
.login-root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-logo {
  margin-bottom: 30px;
}

.login-page-component {
  width: 463px;
}

.login-btn {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.login-email, .login-username {
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
