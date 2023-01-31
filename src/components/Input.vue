<template>
  <div class="input-root">
    <div class="input-label-parent">
      <span v-if="label" class="input-label">{{ label }}</span>
      <span class="input-forgot" v-if="showForgotPassword"
        >Forgot password?</span
      >
    </div>
    <input
      ref="input"
      :value="value"
      :type="type"
      autocomplete="off"
      class="input-text"
      :style="{ border }"
      :placeholder="placeholder"
      @input="value => $emit('onChange', value)"
    />
    <img
      class="input-eye"
      v-if="type == 'password'"
      src="@/assets/eye.png"
      alt=""
      @click="showHidePassword"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: [String, Number],
      required: false
    },
    type: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    showForgotPassword: {
      type: Boolean,
      default: false,
    },
    border: {
      type: String,
      default: '1.5px solid #35373b'
    }
  },
  methods: {
    showHidePassword() {
      let elem = this.$refs.input;
      if (elem.type == "password") elem.type = "text";
      else elem.type = "password";
    },
  },
};
</script>

<style>
.input-root {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-label-parent {
  display: flex;
  justify-content: space-between;
  color: #c5c7ca;
}

.input-label {
  text-align: left;
  padding-bottom: 10px;
  font-size: 14px;
}

.input-forgot {
  text-align: left;
  padding-bottom: 10px;
  font-size: 12px;
}

input {
  background: transparent;
  height: 25px;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
}

.input-text:focus {
  outline: none;
}

.input-eye {
  transform: translate(430px, -35px);
  width: 20px;
}

@media screen and (max-width: 700px) {
  .input-eye {
    transform: translate(270px, -35px);
    width: 20px;
  }
}
@media screen and (max-width: 330px) {
  .input-eye {
    transform: translate(220px, -35px);
    width: 20px;
  }
}
</style>
