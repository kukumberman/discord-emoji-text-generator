import rules from "./rules"

import defaultConfig from "../config/default.json"

const config = defaultConfig

/**
 * 
 * @param {string} char single character
 * @returns 
 */
function predicate(char) {
  return config.entries.find(entry => {
    const reg = new RegExp(entry.search)
    return reg.test(char)
  })
}

/**
 * 
 * @param {string} char single character
 * @returns {string} emoji string
 */
function replacer(char) {
  const matched = predicate(char)
  if (matched) {
    const { type, target } = matched.replaceWith
    return rules[type](target, char)
  }
  else {
    return char
  }
}

/**
 * 
 * @param {string} str 
 * @returns {string} 
 */
export function createEmojiText(str) {
  const result = Array.from(str)
    // .map(char => char.toLowerCase())
    .map(replacer)
    .join(" ")
  return result
}
