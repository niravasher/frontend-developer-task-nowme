<template>
  <div class="login-root">
    <img class="login-logo" src="@/assets/Logo.png" alt="" />
    <Popup :showCloseBtn="false" />
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";

export default {
  name: "Login",
  components: {
    Popup,
  },
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
</style>
