<template>
  <div>
    <input type="text" v-model="input">
    <button @click="copyToClipboard" :disabled="output.length === 0">Copy</button>
    <span>{{ clipboardStatus }}</span>
    <p>{{ output }}</p>
    <textarea v-model="config.text" :class="{ error: config.parseError }" cols="50" rows="40"></textarea>
  </div>
</template>

<script>
import EmojiGenerator from "./TextGenerator/EmojiGenerator"

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      clipboardStatus: "",
      input: "",
      output: "",
      generator: new EmojiGenerator(),
      config: {
        text: "",
        parseError: false,
      },
    }
  },
  created() {
    this.config.text = this.defaultConfigText
  },
  mounted() {
    this.populateQueryText()
    this.replaceQueryText()
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
    },
    updateText() {
      this.output = this.generator.toText(this.input)
    },
    handleConfigChanged() {
      try {
        const config = JSON.parse(this.config.text)
        this.config.parseError = false
        this.generator.update(config)
        this.updateText()
      }
      catch(error) {
        if (error instanceof SyntaxError) {
          this.config.parseError = true
        }
        else {
          console.log(error)
        }
      }
    },
    populateQueryText() {
      const params = new URLSearchParams(window.location.search)
      if (!params.has("text")) {
        return
      }

      const text = params.get("text")
      if (text.length > 0) {
        this.input = text
      }
    },
    replaceQueryText() {
      const { origin, pathname } = window.location
      let url = origin + pathname
      if (this.input.length > 0) {
        url += "?text=" + this.input
      }
      window.history.replaceState(null, "(although most browsers will ignore this parameter)", url)
    }
  },
  watch: {
    input() {
      this.updateText()
      this.replaceQueryText()
    },
    "config.text": function() {
      this.handleConfigChanged()
    }
  },
  computed: {
    defaultConfigText() {
      return JSON.stringify(new EmojiGenerator().config, null, 2)
    }
  }
}
</script>

<style>
.error {
  background-color: lightcoral;
}
</style>
