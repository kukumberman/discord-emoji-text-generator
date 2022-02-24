import rules from "./rules"
import defaultConfig from "../config/default.json"

export default class EmojiGenerator {

  constructor(config) {
    this.update(config ?? defaultConfig)
  }

  update(config) {
    this.config = config
    this.resetCache()
  }

  resetCache() {
    this.cache = {}
  }

  /**
   * 
   * @param {string} char 
   * @returns 
   */
  predicate(char) {
    return this.config.entries.find(entry => {
      const reg = new RegExp(entry.search)
      return reg.test(char)
    })
  }

  /**
   * 
   * @param {string} char 
   * @returns 
   */
  find(char) {
    const matched = this.predicate(char)
    if (matched) {
      const { type, target } = matched.replaceWith
      const entry = rules[type](target, char)
      this.cache[char] = entry
      return entry
    }
    else {
      return char
    }
  }

  /**
   * 
   * @param {string} char 
   * @returns 
   */
  replacer(char) {

    // get from cache (smoll improvement)
    if (typeof(this.cache[char]) !== "undefined") {
      return this.cache[char]
    }
    
    // calculate new and store in cache
    const replace = this.find(char)
    this.cache[char] = replace
    return replace
  }

  /**
   * 
   * @param {string} str 
   * @returns 
   */
  toText(str) {
    return Array.from(str)
      .map(this.replacer.bind(this))
      .join(" ")
  }
}
