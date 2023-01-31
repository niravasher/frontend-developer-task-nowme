<template>
  <div class="login-page-root">
    <img v-if="showCloseBtn" src="@/assets/close.png" class="login-close" alt="" @click="$emit('onClickClose')">
    <div class="login-page-header">{{ header }}</div>
    <div class="login-page-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LoginSignupModal",
  props: {
    header: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    showCloseBtn: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style>
.login-page-root {
  border: 2px solid #969696;
  padding: 40px 20px;
  border-radius: 8px;
  background: linear-gradient(0deg, #27292d, #27292d),
    linear-gradient(129.59deg, #969696 0%, #343434 98.18%);
}

.login-close {
  float: right;
  cursor: pointer;
}

.login-page-header {
  color: #6b6c70;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 8px;
  clear: right;
}

.login-page-title {
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 40px;
}
</style>
