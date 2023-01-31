<template>
  <textarea class="textarea-root" rows="1" placeholder="How are you feeling today?"></textarea>
</template>

<script>
export default {
  name: "Textarea"
}
</script>

<style>
.textarea-root {
  width: 100%;
  background: transparent;
  border: none;
  padding-left: 16px;
  color: #7F8084;
  font-size: 16px;
}

.textarea-root:focus {
  border: none;
  outline: none;
}
</style>
