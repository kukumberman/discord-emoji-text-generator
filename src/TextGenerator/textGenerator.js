import rules from "./rules"

// todo: upload as json?
const config = {
  letter: {
    search: "[a-zA-Z]",
    replaceWith: {
      type: "singleCharacter",
      target: ":regional_indicator_*:"
    }
  },
  number: {
    search: "[0-9]",
    replaceWith: {
      type: "indexBasedArray",
      target: [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:"]
    }
  },
  space: {
    search: "[[:space:]]", // same as "\s"
    replaceWith: {
      type: "space",
      target: " "
    }
  }
}

/**
 * 
 * @param {string} char single character
 * @returns 
 */
function predicate(char) {
  return Object.values(config).find(entry => {
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
    .map(char => char.toLowerCase())
    .map(replacer)
    .join(" ")
  return result
}
