<template>
  <div>
    <input type="text" v-model="input">
    <p>{{ output }}</p>
  </div>
</template>

<script>
import { createEmojiText } from "./textGenerator"

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      input: "",
      output: ""
    }
  },
  watch: {
    input(value) {
      this.output = createEmojiText(value)
    }
  }
}
</script>

<style>
</style>
