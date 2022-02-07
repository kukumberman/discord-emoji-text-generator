<template>
  <div>
    <input type="text" v-model="input">
    <button @click="copyToClipboard" :disabled="output.length === 0">Copy</button>
    <span>{{ clipboardStatus }}</span>
    <p>{{ output }}</p>
  </div>
</template>

<script>
import { createEmojiText } from "./TextGenerator/textGenerator"

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      clipboardStatus: "",
      input: "",
      output: ""
    }
  },
  methods: {
    async copyToClipboard() {
      try {
        await window.navigator.clipboard.writeText(this.output)
        this.clipboardStatus = "Copied"
      }
      catch {
        this.clipboardStatus = "Failed to copy"
      }

      // hide notification
      setTimeout(() => {
        this.clipboardStatus = ""
      }, 1 * 1000)
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
