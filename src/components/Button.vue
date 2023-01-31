<template>
  <button
    :disabled="disable"
    :style="{
      background,
      width,
      height,
      borderRadius: `${borderRadius}px`,
      cursor: disable ? 'not-allowed' : 'pointer'
    }"
    class="button-container"
    @click="onButtonClick"
  >
    <div
      :style="{ color: disable ? 'rgba(0, 0, 0, 0.26)' : textColor }"
      class="center"
      v-if="!loading"
    >
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'GoldcastButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '30px'
    },
    backgroundColor: {
      type: String,
      default: '#4A96FF'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    borderRadius: {
      type: Number,
      default: 4
    }
  },
  computed: {
    background() {
      return this.disable
        ? 'rgba(0, 0, 0, 0.12)'
        : this.backgroundColor;
    },
  },
  methods: {
    onButtonClick(event) {
      this.$emit('onClick', event);
    }
  }
};
</script>

<style>
.button-container {
  padding: 0 16px;
  min-width: 64px;
  border: none;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
